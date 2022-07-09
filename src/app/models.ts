export interface Pokemon {
  id: string;
  image: string;
  isFavorite: boolean;
  name: string;
  number: number
  types: 'Grass' | 'Poison';
}
