import { Component } from '@angular/core';

@Component({
  selector: 'heroes-page',
  standalone: false,
  template: `<p>hero-page works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class HeroPageComponent {}
