import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {PokemonListResponse, PokemonSummary, ViewMode} from "../models";
import {Router} from "@angular/router";

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

  constructor(private pokemonService: PokemonService, private router: Router) { }


  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe((pokemons: PokemonListResponse) => {
      this.pokemons = pokemons.items;
    });
  }


  togglePokemon(pokemon: PokemonSummary) {
    if (pokemon.isFavorite) {
      this.pokemonService.unFavoritePokemon(pokemon.id).subscribe((data) => {
        pokemon.isFavorite = data.isFavorite;
      });
    } else {
      this.pokemonService.favoritePokemon(pokemon.id).subscribe((data) => {
        pokemon.isFavorite = data.isFavorite;
      });
    }
  }

  goToDetail(pokemon: PokemonSummary) {
      this.router.navigate([pokemon.id]);
  }
}
