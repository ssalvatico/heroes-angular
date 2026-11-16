import { Component } from '@angular/core';

@Component({
  selector: 'auth-layout',
  standalone: false,
  template: `
  <div class="grid p-3">
    <mat-card class="col-3 md:col-4 mt-5 md:col-offset-4 md:mt-8">
      <mat-card-content>
        <router-outlet></router-outlet>
      </mat-card-content>  
    </mat-card>
  </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class LayoutPageComponent {}
