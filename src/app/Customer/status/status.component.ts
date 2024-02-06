import { Component } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {
  showService: boolean = false;
  A: number = 0;

  on() {
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
