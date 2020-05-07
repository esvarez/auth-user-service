import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'esb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {

  constructor() { }

  onBack(): void {
    console.log('onBack');
  }

}
