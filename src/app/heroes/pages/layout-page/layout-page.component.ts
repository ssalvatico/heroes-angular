import { Component } from '@angular/core';

@Component({
  selector: 'heroes-layout',
  standalone: false,
  styles: `
  .spacer{
    flex: 1 1 auto;
  }
  `,
  template: `

  <mat-sidenav-container fullscreen>
    <mat-sidenav #sidenav mode="push" [ngStyle]="{width: '250px'}">

      <mat-toolbar class="mat-bg-primary mat-text-on-primary">
        <span>Menu</span>
        <span class="spacer"></span>
      </mat-toolbar>

    </mat-sidenav>

    <mat-sidenav-content>

      <mat-toolbar>
        <button class="mat-bg-primary mat-text-on-primary" mat-icon-button (click)="sidenav.toggle()">
          <mat-icon>menu</mat-icon>
        </button>
      </mat-toolbar>

    </mat-sidenav-content>
  </mat-sidenav-container>

  <router-outlet></router-outlet>

  `,
})
export class LayoutPageComponent {}
