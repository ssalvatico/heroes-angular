import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-page',
  standalone: false,
  template: `<p>hero-page works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class HeroPageComponent implements OnInit{
  
  public hero?:Hero;
  
  constructor(
    private heroService:HeroesService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
  ){}
  
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.heroService.getheroById(id)),
      )
      .subscribe(hero => {
        if(!hero) return this.router.navigate(['/heroes/list']);
        this.hero = hero;
        return;
      });
  }
}
