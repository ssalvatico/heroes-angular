import { Component } from '@angular/core';

@Component({
  selector: 'heroes-layout',
  standalone: false,
  styles: ``,
  template: `
  <p>layout-page works!</p>
  <router-outlet></router-outlet>
  `,
})
export class LayoutPageComponent {}
