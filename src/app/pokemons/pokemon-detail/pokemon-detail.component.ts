import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../pokemon.service";
import {Pokemondetail} from "../models/pokemondetail";
import {Location} from '@angular/common'
import {DecimalPipe} from '@angular/common';
import {Observable} from "rxjs";
import {Pokemon} from "../models/pokemon.model";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit, OnChanges {
  pokemonDetail ?: Pokemondetail;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private location: Location, private decimalPipe: DecimalPipe) {
  }

  @Input() id?: number;
  pokemon: Pokemon | undefined;

  ngOnInit(): void {
    this.getPokemon();
  }

  ngOnChanges(): void {
    this.getPokemon();

  }

  getPokemon() {
    if (this.id)
      this.pokemonService.getPokemon(this.id).subscribe(pk => this.pokemonDetail = pk);

  }

  correctNumber(nombre: number): string {
    return <string>this.decimalPipe.transform(nombre, '3.0-0')
  }

  correctHeightandWeight(taillepoids: number) {
    return <string>this.decimalPipe.transform(taillepoids, '.1')
  }

  cacherPokemon() {
    this.pokemonDetail = undefined;
  }

}
