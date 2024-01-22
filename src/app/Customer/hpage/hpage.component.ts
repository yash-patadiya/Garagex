import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare const gsap: any;

@Component({
  selector: 'app-hpage',
  templateUrl: './hpage.component.html',
  styleUrls: ['./hpage.component.css']
})
export class HpageComponent implements AfterViewInit {
  constructor(private router:Router){}
  onClick(){
    this.router.navigate(['GarageList'])
  }
  ngAfterViewInit(): void {

    gsap.to("nav", {
      backgroundColor: "white",
      duration: 0.5,
      height: "100px",
      scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
      }
    });
gsap.timeline({ repeat: -1 })
  .to("#logodiv", { duration: 0, opacity: 0 })
  .to("#logodiv", { duration: 2, opacity: 1 })
  .to("#logodiv2", { duration: 0, opacity: 0 }, "-=1")
  .to("#logodiv2", { duration: 2, opacity: 1 });


  }
}
