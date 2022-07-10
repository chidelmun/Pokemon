import {Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {MatSelectChange} from "@angular/material/select";

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

  }

  onFavoritesClick() {

  }
}
