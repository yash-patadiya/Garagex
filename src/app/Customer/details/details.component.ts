import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
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
