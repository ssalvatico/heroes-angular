import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  standalone: false,
  template: `
  <mat-card>
    
    <mat-card-header>
      <mat-card-title>{{ hero.superhero }}</mat-card-title>
      <mat-card-subtitle><p>{{ hero.alter_ego }}</p></mat-card-subtitle>
    </mat-card-header>

    <img mat-card-image class="w-full h-auto" [src]="hero | heroimage" [alt]="hero.superhero" />

    <mat-card-content class="mt-2">
      <h4>{{ hero.publisher }}</h4>
      <p>
        <strong>Primera aparición: </strong>{{ hero.first_appearance }}
        <br>
        
        <mat-chip-listbox>
        @for (chipHero of hero.characters.split(',').slice(0,3); track $index) {
          <mat-chip>
            {{ chipHero }}
          </mat-chip>
        }
        </mat-chip-listbox>
      
      </p>
    </mat-card-content>

    <mat-divider></mat-divider>

    <mat-card-actions>
      <button
        matButton
        mat-raised
        [routerLink]="['/heroes/edit',hero.id]"
      ><mat-icon>edit</mat-icon>Editar</button>

      <span class="spacer"></span>

      <button
        matButton
        mat-raised
        [routerLink]="['/heroes',hero.id]"
      ><mat-icon>more_horiz</mat-icon>Más</button>
    
    </mat-card-actions>
  
  </mat-card>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class CardComponent implements OnInit {
  
  @Input()
  public hero!: Hero
  
  ngOnInit(): void {
    if(!this.hero) throw new Error("Hero property required");
    
  }
}
