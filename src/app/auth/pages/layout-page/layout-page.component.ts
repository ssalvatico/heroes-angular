import { Component } from '@angular/core';

@Component({
  selector: 'auth-layout',
  standalone: false,
  template: `<p>layout works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class LayoutPageComponent {}
