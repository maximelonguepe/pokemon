import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TokenUser} from "./TokenUser";


@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  private pokemonUrl = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/auth/login';
  constructor(private http: HttpClient) {
  }
  postUser(email:string | undefined, password : string | undefined): Observable<TokenUser> {
    const body={
      email,
      password
    }
    return this.http.post<TokenUser>(this.pokemonUrl,body);
  }
}
