import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  static API_BASE_URL = 'https://q-exercise-api.o64ixruq9hj.us-south.codeengine.appdomain.cloud/api/rest'

  constructor(private httpClient: HttpClient) { }

  getAllPokemons() {
    return this.httpClient.get(`${PokemonService.API_BASE_URL}/pokemon`);
  }

  getPokemonTypes() {
    return this.httpClient.get(`${PokemonService.API_BASE_URL}/pokemon-types`);
  }
}
