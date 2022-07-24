import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {ActivatedRoute} from "@angular/router";
import {Pokemon, PokemonSummary} from "../models";

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {

  pokemonId: string = '';
  pokemonInfo: Pokemon | undefined;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {
    // @ts-ignore
    this.pokemonId = this.route.snapshot.paramMap.get('id').toString();
    console.log('***ID***', this.pokemonId);
  }

  ngOnInit(): void {
    this.pokemonService.getPokemon(this.pokemonId).subscribe((data: Pokemon) => {
      console.log('***DATE*****', data);
      this.pokemonInfo = data;
    });
  }

}
