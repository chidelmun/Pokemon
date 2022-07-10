import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PokemonListResponse} from "./models";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  static API_BASE_URL = 'https://q-exercise-api.o64ixruq9hj.us-south.codeengine.appdomain.cloud/api/rest'

  constructor(private httpClient: HttpClient) { }

  getAllPokemons() {
    return this.httpClient.get<PokemonListResponse>(`${PokemonService.API_BASE_URL}/pokemon`);
  }

  getPokemonTypes() {
    return this.httpClient.get<any>(`${PokemonService.API_BASE_URL}/pokemon-types`);
  }

  favoritePokemon(id: string) {
    console.log('***favorite****', id);
    return this.httpClient.post<any>(`${PokemonService.API_BASE_URL}/pokemon/${id}/favorite`, {});
  }

  unFavoritePokemon(id: string) {
    console.log('***unfavorite****', id);
    return this.httpClient.post<any>(`${PokemonService.API_BASE_URL}/pokemon/${id}/unfavorite`, {});
  }

}
