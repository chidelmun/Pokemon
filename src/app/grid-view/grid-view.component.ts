import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {Pokemon, PokemonListResponse, PokemonSummary} from "../models";

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit, OnChanges {

  @Input()
  searchTerm: string = '';

  pokemons: PokemonSummary[] = [];

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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchTerm']) {
      console.log('Search Term Changes', this.searchTerm);
    }
  }
}
