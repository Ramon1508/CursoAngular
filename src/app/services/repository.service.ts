import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonDesc, PokemonPagination } from '../models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private apiBaseUrl = 'https://pokeapi.co/api/v2/';
  constructor(private http: HttpClient) { }
  getPokemons(): Observable<PokemonPagination> {
    return this.http.get(this.apiBaseUrl + 'pokemon') as Observable<PokemonPagination>;
  }
  getPokemonExtraData(name: string): Observable<PokemonDesc> {
    return this.http.get(this.apiBaseUrl + 'pokemon/' + name) as Observable<PokemonDesc>;
  }
}
