import { Pipe, PipeTransform } from '@angular/core';
import {PokemonSummary} from "./models";

@Pipe({
  name: 'pokemonFilter'
})
export class PokemonFilterPipe implements PipeTransform {

  transform(pokemons: PokemonSummary[], searchTerm: string, favorites?: boolean): PokemonSummary[] {
    if (favorites) {
      console.log('FAVORITE****', favorites);
        return pokemons.filter(p => p.isFavorite === true);
    } else {
      return pokemons.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.types.toString().toLowerCase().includes(searchTerm.toLowerCase()));

    }
  }

}
