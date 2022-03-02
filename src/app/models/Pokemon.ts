export class Pokemon {
  name: string | null = null;
  url: string | null = null;
}
export class BasePagination {
  count: number = -1;
  next: string | null = null;
  previous: string | null = null;
  results: any[] = [];
}
export class PokemonPagination extends BasePagination {
  results: Pokemon[] = [];
}
export class PokemonDesc {
  id: number = -1;
  sprites: {
    back_default: string,
    other: {
      dream_world: {
        front_default: string
      } | null,
      home: {
        front_default: string
      } | null,
    }
  } | null = null;
}
