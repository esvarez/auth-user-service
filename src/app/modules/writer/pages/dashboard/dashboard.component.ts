import { Component } from '@angular/core';

@Component({
  selector: 'esb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent {

  constructor() { }
  isCollapsed = false;
}
