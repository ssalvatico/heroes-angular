import { Component } from '@angular/core';

@Component({
  selector: 'error-404',
  standalone: false,
  template: `<p>404-page works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class Error404PageComponent {}
