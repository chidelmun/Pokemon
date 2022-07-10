import { Pipe, PipeTransform } from '@angular/core';
import {PokemonSummary} from "./models";

@Pipe({
  name: 'pokemonFilter'
})
export class PokemonFilterPipe implements PipeTransform {

  transform(pokemons: PokemonSummary[], searchTerm: string): PokemonSummary[] {
    return pokemons.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.types.toString().toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
