import { Component, OnInit, signal } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-list',
  standalone: false,
  template: `
  <h1>Listado de heroes</h1>
  <mat-divider></mat-divider>
  <div class="grid mb-8 p-3 overflow-x-hidden">
    @for (hero of heroes(); track $index) {
      <div class="col-12 sm:col-4 md:col-3" xl:col-2>
        <heroes-hero-card [hero]="hero"></heroes-hero-card>
      </div>
    }
  </div>
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
