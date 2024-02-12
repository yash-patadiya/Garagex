import { Component } from '@angular/core';

@Component({
  selector: 'app-g-list',
  templateUrl: './g-list.component.html',
  styleUrls: ['./g-list.component.css']
})
export class GListComponent {
  showService: boolean = false;
    showService1: boolean = false;

  A: number = 0;
   B:number =0;
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
  onclick1(){
    if (this.B == 0) {
      this.showService1 = true;
      this.B = 1;
    }
    else {
      this.showService1 = false;
      this.B= 0;
    }

  }
}
