import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe((pokemons) => {
      console.log('***Pokemons***', pokemons);
    })
  }

}
