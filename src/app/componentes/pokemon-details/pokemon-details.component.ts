import { Observable } from 'rxjs';
import { Pokemon, PokemonDesc } from './../../models/Pokemon';
import { Component, Input, AfterContentInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements AfterContentInit {
  @Input() pokemon: Pokemon | null = null;
  data: Observable<string | undefined> | null = null;
  constructor(private repo: RepositoryService) { }

  ngAfterContentInit(): void {
    if (this.pokemon?.name) {
      this.data = this.repo.getPokemonExtraData(this.pokemon?.name).pipe(map(p => p.sprites?.other?.dream_world?.front_default));
    }
  }

}
