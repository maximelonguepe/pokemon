import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Pokemon} from "../models/pokemon.model";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons ?: Pokemon[];
  pokemonsTest ?: Pokemon[];
  pokemonSearch ?: string;
  @Output() selectedPokemon = new EventEmitter<number>();

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    //this.heroes=this.heroService.getHeroes();
    this.pokemonService.getPokemons().subscribe(pagedata => this.pokemons = pagedata.data);

  }

  onscroll() {

  }

  searchPokemon(nomPokemon ?: string) {
    this.pokemonSearch = nomPokemon;
    console.log(this.pokemonSearch);
    if(this.pokemonSearch==""){
      this.getPokemons();
    }
    else {
      this.pokemonService.getPokemonName(nomPokemon).subscribe(pagedata => this.pokemons = pagedata.data);
    }
  }

  onclick(id: number) {
    this.selectedPokemon.emit(id);
  }
}
