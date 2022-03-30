import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-myteam',
  templateUrl: './myteam.component.html',
  styleUrls: ['./myteam.component.scss']
})
export class MyteamComponent implements OnInit {

  constructor(private router:Router, private cookie : CookieService) { }

  ngOnInit(): void {
    let token = this.cookie.get('token');
    if(token!=""){
      console.log(token);

    }
    else{
      console.log("vide")
      this.router.navigate(['connexion']);

    }

  }

}
