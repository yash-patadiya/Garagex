import { Component } from '@angular/core';

@Component({
  selector: 'app-g-list',
  templateUrl: './g-list.component.html',
  styleUrls: ['./g-list.component.css']
})
export class GListComponent {
  showService: boolean = false;
  A: number = 0;
  onclick() {
    // let a = 0;
    if (this.A == 0) {
      this.showService = true;
      this.A = 1;
    }
    else {
      this.showService = false;
      this.A = 0;
    }
  }
}
