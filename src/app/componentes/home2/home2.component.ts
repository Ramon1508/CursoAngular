import { RepositoryService } from './../../services/repository.service';
import { Subscription, Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pokemon, PokemonPagination } from 'src/app/models/Pokemon';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit, OnDestroy {
  pokemons: Observable<Pokemon[]> = this.repo.getPokemons().pipe(map(e => e.results));
  constructor(private repo: RepositoryService) { }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

}
