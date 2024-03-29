import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/footer.component';
import { HeaderComponent } from './core/header.component';

@Component({
  selector: 'lab-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  template: `
    <lab-header />
    <router-outlet />
    <lab-footer />
  `,
  styles: [],
})
export class AppComponent {}
