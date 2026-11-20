import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'heroes-new',
  standalone: false,
  template: `
  <h1>
    @if(crudState === 'new'){
      <mat-icon>add</mat-icon>
    }
    @else {
      <mat-icon>edit</mat-icon>
    }
    <span> {{ crudState | i18nSelect:headerMap }} Héroe</span>
  </h1>
  <mat-divider class="mb-2" />
  
  <button matButton class="mb-2" (click)="goBack()">
    <mat-label>Volver</mat-label>
    <mat-icon>arrow_back</mat-icon>
  </button>
  <div class="grid">
    <div class="col-12 sm:col-6">
      <mat-card>
        <mat-card-content>
          <form class="grid" [formGroup]="heroForm" (ngSubmit)="onSubmit()">          

            <mat-form-field class="col-12 sm:col-6">
              <mat-label>Super Heroe</mat-label>
              <input
                matInput
                type="text"
                required
                formControlName="superhero"
              />
            </mat-form-field>

            <mat-form-field class="col-12 sm:col-6">
              <mat-label>Alter Ego</mat-label>
              <input
                matInput
                type="text"
                required
                formControlName="alter_ego"
              />
            </mat-form-field>
            
            <mat-form-field class="col-12">
              <mat-label>Primera aparicion</mat-label>
              <input
                matInput
                type="text"
                required
                formControlName="first_appearance"
              />
            </mat-form-field>

            <mat-form-field class="col-12">
              <mat-label>Personajes</mat-label>
              <input
                matInput
                type="text"
                required
                formControlName="characters"
              />
            </mat-form-field>

            <mat-form-field class="col-12">
              <mat-label>Editorial</mat-label>
              <mat-select
                required
                formControlName="publisher"
                >
                  @for(publisher of publishers; track publisher){
                    <mat-option [value]="publisher">{{ publisher }}</mat-option>
                  }
              </mat-select>
            </mat-form-field>

            <mat-form-field class="col-12">
              <mat-label>Imagen del heroe</mat-label>
              <input
                matInput
                type="text"
                formControlName="alt_img"
              />

            </mat-form-field>
          </form>

          
          <div class="flex justify-content-between">
            <button mat-flat-button class="btn-success" (click)="onSubmit()">
              <mat-label>Guardar</mat-label>
              <mat-icon>save</mat-icon>
            </button>

            <button mat-flat-button class="btn-danger">
                <mat-label>Eliminar</mat-label>
                <mat-icon>delete</mat-icon>
            </button>
          </div>


        </mat-card-content>
      </mat-card>
    </div>

    <div class="col-12 sm:col-6">
      <mat-card class="hero-img">
        <img
          matCardImage
          [src]="currentHero | heroImage"
          alt="imagen del heroe"
          class="cardImg"
        />
      </mat-card>
    </div>
  </div>
  `,
  styles: `
    :host {
      display: block;
    }

    .hero-img{
      width: fit-content;
    }

    .cardImg {
      width: 416px;
      height: 521px;
      object-fit: contain;
      align-self: center;
    }
  `,
})
export class NewPageComponent implements OnInit{
  public publishers:Publisher[] = Object.values(Publisher);

  protected crudState:'new'|'edit' = 'new';
  protected headerMap = {
    'new':'Agregar',
    'edit':'Editar',
  };

  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero         : new FormControl<string>('',{nonNullable: true}),
    publisher         : new FormControl<Publisher>( Publisher.DCComics, {nonNullable:true} ),
    alter_ego         : new FormControl<string>(''),
    first_appearance  : new FormControl<string>(''),
    characters        : new FormControl<string>(''),
    alt_img           : new FormControl<string>(''),
  });

  constructor(
    private heroesService:HeroesService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
  ){}
  
  ngOnInit(): void {
    if( !this.router.url.includes('edit') ) return;
    this.crudState = 'edit';
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.heroesService.getheroById(id) ),
      )
      .subscribe( hero => {
        if(!hero) return this.router.navigateByUrl('/');
        this.heroForm.reset(hero)
        return;
      })
  }

  goBack(){
    return this.router.navigateByUrl('/');
  }

  get currentHero(): Hero{
    const hero = this.heroForm.value as Hero;
    console.log(hero);
    return hero;
  }

  onSubmit():void{
    if(this.heroForm.invalid)return;
    if( this.currentHero.id ){
      this.heroesService.updateHero( this.currentHero )
        .subscribe(hero => {
          //TODO mostrar snackbar
        });
        return;
    }
    this.heroesService.addHero(this.currentHero)
      .subscribe(hero => {
        //TODO mostrar snackbar
        //TODO navegar a /heroes/edit/hero.id
      })
  }
}
