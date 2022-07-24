import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pokemon, PokemonListResponse, PokemonSummary} from "./models";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  static API_BASE_URL = 'https://q-exercise-api.o64ixruq9hj.us-south.codeengine.appdomain.cloud/api/rest'

  constructor(private httpClient: HttpClient) { }

  getAllPokemons() {
    return this.httpClient.get<PokemonListResponse>(`${PokemonService.API_BASE_URL}/pokemon`);
  }

  getPokemon(id: string) {
    return this.httpClient.get<Pokemon>(`${PokemonService.API_BASE_URL}/pokemon/${id}`);
  }

  getPokemonTypes() {
    return this.httpClient.get<any>(`${PokemonService.API_BASE_URL}/pokemon-types`);
  }

  favoritePokemon(id: string) {
    return this.httpClient.post<any>(`${PokemonService.API_BASE_URL}/pokemon/${id}/favorite`, {});
  }

  unFavoritePokemon(id: string) {
    return this.httpClient.post<any>(`${PokemonService.API_BASE_URL}/pokemon/${id}/unfavorite`, {});
  }

}
