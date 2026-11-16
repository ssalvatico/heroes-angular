import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrls: ['./app.component.css', '../material-theme.scss'],
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('heroesApp');
}
