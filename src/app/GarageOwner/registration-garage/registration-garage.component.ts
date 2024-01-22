import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration-garage',
  templateUrl: './registration-garage.component.html',
  styleUrls: ['./registration-garage.component.css']
})
export class RegistrationGarageComponent {
  constructor(private router : Router){}
Go(){
 this.router.navigate(['Sform'])
}
}
