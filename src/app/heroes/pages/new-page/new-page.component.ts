import { Component } from '@angular/core';

@Component({
  selector: 'heroes-new',
  standalone: false,
  template: `<p>newPage works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class NewPageComponent {}
