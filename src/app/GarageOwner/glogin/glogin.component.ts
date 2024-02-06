import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-glogin',
  templateUrl: './glogin.component.html',
  styleUrls: ['./glogin.component.css']
})
export class GLoginComponent {
 constructor(private router: Router){}
  onClick(){
   this.router.navigate(['Garage'])
  }

}
