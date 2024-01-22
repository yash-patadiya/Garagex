import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-g-inter',
  templateUrl: './g-inter.component.html',
  styleUrls: ['./g-inter.component.css']
})
export class GInterComponent {
  constructor(private router : Router){}
onClick(){
  this.router.navigate(['GarageDetails'])
}
}
