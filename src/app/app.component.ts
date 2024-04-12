import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DxButtonModule } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DxButtonModule],
  template: `
  <router-outlet></router-outlet>
  `,
  styles: [],
})

export class AppComponent {
}