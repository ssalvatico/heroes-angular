import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-page',
  standalone: false,
  templateUrl: './hero-page.component.html',
  styles: `
    :host { display: block; }
    mat-list-item {
    height: auto !important;
  }
  `,
})
export class HeroPageComponent implements OnInit{
  
  private _hero:WritableSignal<Hero|undefined> = signal<Hero | undefined>(undefined);
  public hero = this._hero.asReadonly();

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
        this._hero.set(hero);
        return;
      });
  }

  goBack(){
    this.router.navigateByUrl('/heroes/list');
  }
}
