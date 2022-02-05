import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../pokemon.service";
import {Pokemondetail} from "../models/pokemondetail";
import { Location } from '@angular/common'
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
   pokemonDetail ?: Pokemondetail;
  constructor(private route : ActivatedRoute, private pokemonService:PokemonService,private location:Location, private decimalPipe:DecimalPipe) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(){
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonService.getPokemon(id).subscribe(pk=>this.pokemonDetail=pk);

  }
  correctNumber(nombre:number): string{
    return <string>this.decimalPipe.transform(nombre, '3.0-0')
  }

}
