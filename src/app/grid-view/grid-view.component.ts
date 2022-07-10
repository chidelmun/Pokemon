import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {PokemonListResponse, PokemonSummary, ViewMode} from "../models";

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

  @Input()
  searchTerm: string = '';
  @Input()
  filterByFavorites: boolean = false;

  pokemons: PokemonSummary[] = [];

  @Input()
  viewMode: ViewMode = ViewMode.Grid;

  constructor(private pokemonService: PokemonService) { }


  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe((pokemons: PokemonListResponse) => {
      this.pokemons = pokemons.items;
    })
  }


  togglePokemon(pokemon: any) {
    if (pokemon.isFavorite) {
      const resp = this.pokemonService.favoritePokemon(pokemon.id);
      console.log(resp);
    } else {
      this.pokemonService.unFavoritePokemon(pokemon.id);
    }
  }
}
