import { Component, OnInit, signal } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-list',
  standalone: false,
  template: `
  <ul>
    @for (hero of heroes(); track $index) {
      <li>{{ hero.superhero }}</li>
    }
  </ul>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ListPageComponent implements OnInit{
  public heroes = signal<Hero[]>([]);

  constructor(private heroesService:HeroesService){}
  
  
  
  
  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe( heroes => this.heroes.set(heroes) );
  }
}
