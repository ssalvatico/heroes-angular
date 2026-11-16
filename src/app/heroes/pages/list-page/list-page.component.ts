import { Component } from '@angular/core';

@Component({
  selector: 'heroes-list',
  standalone: false,
  template: `<p>listPage works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ListPageComponent {}
