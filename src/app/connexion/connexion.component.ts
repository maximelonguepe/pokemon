import { Component, OnInit } from '@angular/core';
import {ConnexionService} from "./connexion.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TokenUser} from "./TokenUser";

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
  constructor(private connexionService: ConnexionService, private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  seConnecter(){
  console.log(this.form.get("username")?.value);
  this.connexionService.postUser(this.form.get("username")?.value,this.form.get("password")?.value).subscribe(pagedata => this.token = pagedata);
  }
}
