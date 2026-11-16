import { Component } from '@angular/core';

@Component({
  selector: 'heroes-search',
  standalone: false,
  template: `<p>searchPage works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SearchPageComponent {}
