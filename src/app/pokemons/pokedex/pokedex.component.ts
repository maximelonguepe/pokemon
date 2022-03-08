import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  id ?: number;
  showFiller =false;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeId(identifiant: number) {
    console.log(identifiant);
    this.id = identifiant;
  }


}
