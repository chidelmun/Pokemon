export interface Pokemon {
  id: string;
  image: string;
  isFavorite: boolean;
  name: string;
  number: number
  types: 'Grass' | 'Poison';
}

export interface PokemonServiceResponse {
  count: number;
  items: Pokemon[];
  limit: number;
   offset: number;
}
