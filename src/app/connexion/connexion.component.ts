import { Component, OnInit } from '@angular/core';
import {ConnexionService} from "./connexion.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TokenUser} from "./TokenUser";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  private token?:TokenUser;
  public form: FormGroup=this.fb.group({
    username:["",[Validators.email,Validators.required]],
    password:["",Validators.required]
  });
  constructor(private connexionService: ConnexionService, private fb : FormBuilder, private router:Router, private cookie : CookieService) { }

  ngOnInit(): void {
  }

  seConnecter(){
    this.connexionService.postUser(this.form.get("username")?.value,this.form.get("password")?.value).subscribe(pagedata => this.token = pagedata);
    console.log(this.token?.access_token);
    if(this.token!=undefined || this.token!=null){
      this.router.navigate( ["myteam"],{state: {data: this.token}})
    }
    this.cookie.set('token',<string>this.token?.access_token)
  }
}
