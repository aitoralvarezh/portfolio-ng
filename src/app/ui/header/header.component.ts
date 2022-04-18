import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  class = ''
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.class = this.class === '' ? 'dark' : ''
    console.log(this.class);
    
  }
}
