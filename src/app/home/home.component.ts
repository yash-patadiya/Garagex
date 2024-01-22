import { AfterViewInit, Component } from '@angular/core';
import { TweenMax, Power2, TimelineLite } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Router } from '@angular/router';


declare const gsap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  [x: string]: any;
  showLogin: boolean = false;
  constructor(private router:Router){}
  Gow(){
    this.router.navigate(['Garagereg']);
  }
 Cr(){
      this.router.navigate(['registration']);

 }
  ngAfterViewInit(): void {
    let mouse = document.querySelector<HTMLDivElement>("#cursor");
    let mouse1 = document.querySelector<HTMLDivElement>("#cursor-blur");

    document.addEventListener('mousemove', (det) => {
      if (mouse) {
        mouse.style.left = det.x + 30 + "px";
        mouse.style.top = det.y - 10 + "px";
      }
    });

    document.addEventListener('mousemove', (det) => {
      if (mouse1) {
        mouse1.style.left = det.x - 50 + "px";
        mouse1.style.top = det.y - 10 + "px";
      }
    });

    gsap.to("nav", {
      backgroundColor: "black",
      duration: 0.5,
      height: "100px",
      scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
      }
    });
    gsap.to("#main", {
      backgroundColor: "black",
      scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -40%",
        scrub: 2
      }
    })
    // Assuming you have types defined for your HTML elements
    // For example:
    // interface HTMLElement {
    //   addEventListener(event: string, callback: EventListenerOrEventListenerObject): void;
    //   style: CSSStyleDeclaration;
    // }

    const h4All: NodeListOf<HTMLHeadingElement> = document.querySelectorAll("nav h4");

    h4All.forEach(function (elem: HTMLHeadingElement) {
      elem.addEventListener("mouseenter", function () {
        // Assuming 'mouse' and 'crsr' are references to HTML elements representing the mouse and cursor

        if (mouse) {
          mouse.style.transform = "scale(3)";
          mouse.style.backgroundColor = "transparent";
          mouse.style.border = "2px solid #fff";
        }


      });

      elem.addEventListener("mouseleave", function () {

        if (mouse) {
          mouse.style.transform = "scale(1)";
          mouse.style.backgroundColor = "rgb(137, 236, 25)";
          mouse.style.border = "1px solid #95C11E";
        }


      });
    });

    gsap.to("#about-us", {
      y: 100,
      stagger: 2,
      scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        scrub: 2

      }
    })
    // const d = document.querySelector<HTMLDivElement>("#login");
    let Iconclose = document.querySelector("#login #ic")
    setTimeout(() => {
      this.showLogin = true; // Display the login div after 5 seconds
      if(Iconclose){
       Iconclose.addEventListener('click',() =>{
                this.showLogin = false; // Display the login div after 5 seconds

       })
      }
    }, 5000)
  }
}

