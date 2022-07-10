export interface PokemonSummary {
  id:	string;
  name:	string;
  image:	string;
  isFavorite:	boolean;
  types: string[];
}

export interface Pokemon extends PokemonSummary {
  sound: string;
  maxHP: number;
  maxCP: number;
  previousEvolutions: PokemonSummary[];
  evolutions: PokemonSummary[];
  weight: PokemonSize;
  height: PokemonSize;
}

export interface PokemonListResponse {
  limit: number;
  offset:	number;
  count: number;
  items: PokemonSummary[];
}

export interface PokemonSize {
  minimum: number;
  maximum: number;
}

export enum ViewMode {
  List, Grid
}
