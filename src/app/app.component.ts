import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-ng';
  class = ''

  onClick() {
    this.class = this.class === '' ? 'dark' : ''
    console.log(this.class);
  }
}
