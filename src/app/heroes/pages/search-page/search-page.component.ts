import { Component, signal, WritableSignal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'heroes-search',
  standalone: false,
  template: `
  <div class="flex flex-column p-2">
    <h3>Buscador</h3>
    <mat-form-field>
      <mat-label>Buscador de heroes</mat-label>
      <input
        type="text"
        matInput
        [formControl]="searchInput"
        (input)="searchHero()"
        [matAutocomplete]="auto"
      />
      <mat-autocomplete
        autoActiveFirstOption
        #auto="matAutocomplete"
        (optionSelected)="onSelectedOption( $event )"
      >
      @for (hero of heroes(); track hero) {
        <mat-option [value]="hero">{{ hero.superhero }}</mat-option>
      }
      @if(!heroes().length && searchInput.value?.length){
        <mat-option>No se encontró "{{ searchInput.value }}"</mat-option>
      }
    </mat-autocomplete>
    </mat-form-field>

    {{ selectedHero() | json }}
  </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SearchPageComponent {
  public searchInput = new FormControl('');
  
  private _heroes: WritableSignal<Hero[]> = signal<Hero[]>([]);
  public heroes = this._heroes.asReadonly();
  private _selectedHero: WritableSignal<Hero | undefined> = signal<Hero | undefined>(undefined);
  private selectedHero = this._selectedHero.asReadonly();

  constructor(private heroService:HeroesService){}

  searchHero(){
    const value:string = this.searchInput.value || '';
    if(!value) return;
    this.heroService.getSuggestions(value)
      .subscribe(heroes => this._heroes.set(heroes));
  }

  onSelectedOption(event:MatAutocompleteSelectedEvent):void{
    if(!event.option.value){
      this._selectedHero.set(undefined);
      return;
    }
    const hero: Hero = event.option.value;
    this.searchInput.setValue(hero.superhero);
    this._selectedHero.set(hero);
  }
}
