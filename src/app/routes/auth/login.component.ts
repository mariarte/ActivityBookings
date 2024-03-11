import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lab-login',
  standalone: true,
  imports: [],
  template: ` <h1>login works!</h1> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent {}
