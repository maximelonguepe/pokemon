import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pagedata} from "../models/pagedata";
import {Pokemon} from "../models/pokemon.model";


@Injectable({
  providedIn: 'root'
})
export class MyteamService {
  private myTeamUrl = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/trainers/me/team';
  constructor(private http: HttpClient) {
  }

  getTeam(token:string): Observable<number[]> {
    return this.http.get<number[]>(this.myTeamUrl , {
      headers: {
        "Authorization": 'Bearer ' + token
      }});
  }

}
