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

  pokemonTypes: any[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonTypes().subscribe((pokemonTypes: any) => {
      console.log('**** PokemonType****', pokemonTypes);
      this.pokemonTypes = pokemonTypes.map((t: string) => {
           return {
              value: t,
             viewValue: t
           };
      })
    });
  }

  handleSelectionChange(event: any) {
    console.log('*****CHANGE****', event);
  }

  handleInput(searchValue: string) {
    console.log('***Event****', searchValue);
    this.onSearch.emit(searchValue)
  }
}
