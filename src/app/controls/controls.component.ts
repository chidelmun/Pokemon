import {Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Output()
  onSearch: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  onTypeChange: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  onAll: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  onFavorites: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  onListMode: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  onGridMode: EventEmitter<boolean> = new EventEmitter<boolean>();

  pokemonTypes: any[] = [];
  selectedType: string = '';

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonTypes().subscribe((pokemonTypes: any) => {
      this.pokemonTypes = pokemonTypes.map((t: string) => {
           return {
              value: t,
             viewValue: t
           };
      })
    });
  }

  handleSelectionChange(type: string) {
    this.onTypeChange.emit(type)
  }

  handleInput(searchValue: string) {
    this.onSearch.emit(searchValue)
  }

  onAllClick() {
    this.onAll.emit(true);
  }

  onFavoritesClick() {
    this.onFavorites.emit(true);
  }

  onListModeClick() {
    this.onListMode.emit(true)
  }

  onGridModeClick() {
    this.onGridMode.emit(true)
  }
}
