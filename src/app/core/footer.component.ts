import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'lab-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      <nav>
        <span>
          <a [href]="author.homepage" target="_blank">By {{ author.name }}.</a>
          <div>{{ getYear() }}</div>
        </span>
        @if(cookiesAccepted()){
        <span>Cookies accepted!</span>
        } @else {
        <button class="secondary outline" (click)="onAcceptCookies()">Accept cookies</button>
        }
      </nav>
    </footer>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  author = {
    name: 'Softtek',
    homepage: 'https://www.softtek.com/es-es/',
  };

  //year = 0;

  /*contructor() {
    this.year = new Date().getFullYear();
  }*/

  getYear() {
    return new Date().getFullYear();
  }

  cookiesAccepted: WritableSignal<boolean> = signal(false);

  onAcceptCookies() {
    console.log('Cookies accepted');
    //this.cookiesAccepted.set(true);
    this.cookiesAccepted.update((valor: boolean) => {
      return !valor;
    });
  }
}
