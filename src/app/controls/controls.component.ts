import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

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

}
