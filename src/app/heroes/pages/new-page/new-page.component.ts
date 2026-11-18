import { Component } from '@angular/core';
import { Publisher } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-new',
  standalone: false,
  template: `
  <h1>Editar / Agregar Héroe</h1>
  <small>superman</small>
  <mat-divider class="mb-2" />

  <div class="grid">
    <div class="col-12 sm:col-6">
      <mat-card>
        <mat-card-content>
          
          <div class="grid">

            <mat-form-field class="col-12 sm:col-6">
              <mat-label>Super Heroe</mat-label>
              <input
                matInput
                type="text"
                required=""
              />
            </mat-form-field>
            <mat-form-field class="col-12 sm:col-6">
              <mat-label>Alter Ego</mat-label>
              <input
                matInput
                type="text"
                required=""
              />
            </mat-form-field>
            
            <mat-form-field class="col-12">
              <mat-label>Primera aparicion</mat-label>
              <input
                matInput
                type="text"
                required=""
              />
            </mat-form-field>

            <mat-form-field class="col-12">
              <mat-label>Personajes</mat-label>
              <input
                matInput
                type="text"
                required=""
              />
            </mat-form-field>

            <mat-form-field class="col-12">
              <mat-label>Editorial</mat-label>
              <mat-select required>
                @for(publisher of publishers; track publisher){
                  <mat-option>{{ publisher }}</mat-option>
                }
              </mat-select>
            </mat-form-field>
          
          </div>
          <div class="flex justify-content-between">
            <button mat-flat-button>Crear</button>
            <button mat-flat-button>Eliminar</button>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
    <div class="col-12 sm:col-6"></div>
  </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class NewPageComponent {
  public publishers:Publisher[] = Object.values(Publisher);
}
