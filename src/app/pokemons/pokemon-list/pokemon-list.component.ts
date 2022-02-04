import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../models/pokemon.model";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons ?: Pokemon[];

  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }
  getPokemons(){
    //this.heroes=this.heroService.getHeroes();
    this.pokemonService.getPokemons().subscribe(pagedata=>this.pokemons=pagedata.data);

  }
}
