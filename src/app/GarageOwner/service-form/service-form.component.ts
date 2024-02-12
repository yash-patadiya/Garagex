import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent {
  showRouter: boolean = false;
  showRouter1: boolean = false;

  A: number = 0;
  B: number = 0;

  showFunction(event: Event) {
    if (this.A == 0) {
      this.A++;
      this.showRouter = true;
      event.preventDefault();

    }
    else {
      this.showRouter = false;
      this.A = 0;
    }
  }
  showFunction1(event: Event) {
    if (this.B == 0) {
      this.B++;
      this.showRouter1 = true;
      event.preventDefault();

    }
    else {
      this.showRouter1 = false;
      this.B = 0;
    }
  }

  constructor(private router: Router) { }
  onClick() {
    this.router.navigate(['GLogin'])
  }

}




