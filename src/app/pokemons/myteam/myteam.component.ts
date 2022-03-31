import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {MyteamService} from "./myteam.service";

@Component({
  selector: 'app-myteam',
  templateUrl: './myteam.component.html',
  styleUrls: ['./myteam.component.scss']
})
export class MyteamComponent implements OnInit {
  private token?:string;
  private array?:number[];
  constructor(private router:Router, private cookie : CookieService, private myteamService : MyteamService) { }

   ngOnInit(): void{

    this.token = this.cookie.get('token');
    if (this.token != "") {
      console.log(this.token);
      this.myteamService.getTeam(this.token).subscribe(pagedata => this.array = pagedata);
      console.log("-->" + this.array);
      this.myteamService.getTeam(this.token).subscribe(pagedata => this.array = pagedata);
      console.log("-->" + this.array);
    } else {
      console.log("vide")
      this.router.navigate(['connexion']);

    }

  }

}
