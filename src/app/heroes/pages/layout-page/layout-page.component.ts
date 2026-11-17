import { Component } from '@angular/core';

@Component({
  selector: 'heroes-layout',
  standalone: false,
  styles: `
    :host {
      display: block;
    }
  `,
  template: `

  <mat-sidenav-container fullscreen>
    <mat-sidenav #sidenav mode="push" [ngStyle]="{width: '250px'}">

      <mat-toolbar class="mat-bg-error mat-text-on-error">
        <span>Menu</span>
        <span class="spacer"></span>
      </mat-toolbar>

      <mat-nav-list>
        @for (item of sidebarItems; track $index){
          <mat-list-item
            [routerLink]="item.url"
            (click)="sidenav.toggle()"
          ><mat-icon matListItemIcon>{{ item.icon }}</mat-icon> {{ item.label }}

          </mat-list-item>
        }
      </mat-nav-list>
    </mat-sidenav>

    <mat-sidenav-content>
      <mat-toolbar class="mat-bg-error mat-text-on-error">

        <button class="mat-text-on-error" mat-icon-button (click)="sidenav.toggle()">
          <mat-icon>menu</mat-icon>
        </button>

        <span class="spacer"></span>
        <button mat-flat-button [ngStyle]="{
          '--mat-button-filled-container-color': 'var(--mat-sys-error)',
          '--mat-button-filled-label-text-color': 'var(--mat-sys-on-error)'}"
        >Logout
        </button>
      </mat-toolbar>
      
      <div class="container pl-3">
        <router-outlet></router-outlet>
      </div>
      
    </mat-sidenav-content>
  </mat-sidenav-container>
  
  `,
})
export class LayoutPageComponent {
  public sidebarItems = [
    {label: 'Listado', icon: 'label', url: './list'},
    {label: 'Añadir', icon: 'add', url: './new'},
    {label: 'Buscar', icon: 'search', url: './search'},

  ];
}
