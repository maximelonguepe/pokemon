import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {Pokemon} from "./models/pokemon.model";
import {Pagedata} from "./models/pagedata";
import {Pokemondetail} from "./models/pokemondetail";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonUrl = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/pokemons';

  constructor(private http: HttpClient) {
  }

  getPokemons(): Observable<Pagedata<Pokemon>> {
    const params = new HttpParams().set('offset', 0).set('limit', 1000);
    return this.http.get<Pagedata<Pokemon>>(this.pokemonUrl, {params});
  }

  getPokemonName(pokemonName ?: string): Observable<Pagedata<Pokemon>> {
    const url = this.pokemonUrl + "?search=" + pokemonName;
    return this.http.get<Pagedata<Pokemon>>(url);
  }


  getPokemon(id: number | undefined): Observable<Pokemondetail> {
    return this.http.get<Pokemondetail>(this.pokemonUrl + '/' + id);
  }


}
