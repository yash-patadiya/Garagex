import { Component } from '@angular/core';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent {
showRouter:boolean=false;
A:number =0
   showFunction(event:Event) {
     event.preventDefault();
  this.showRouter = !this.showRouter;
}


    }




