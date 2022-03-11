import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonDetailComponent} from "./pokemons/pokemon-detail/pokemon-detail.component";
import {PokemonListComponent} from "./pokemons/pokemon-list/pokemon-list.component";
import {PokedexComponent} from "./pokemons/pokedex/pokedex.component";
import {ConnexionComponent} from "./connexion/connexion.component";

const routes: Routes = [
  { path: 'pokemons/:id', component: PokemonDetailComponent },
  { path: 'pokemons', component: PokedexComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
