import { Component,AfterViewInit,ElementRef,Renderer2,ViewChild } from '@angular/core';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatusListComponent implements AfterViewInit {
    A: number = 0;

    @ViewChild('Menu', { static: true }) menu!: ElementRef<HTMLDivElement>;
  @ViewChild('side', { static: true }) side!: ElementRef<HTMLDivElement>;
  @ViewChild('d1', { static: true }) label1!: ElementRef<HTMLDivElement>;
  @ViewChild('d2', { static: true }) label2!: ElementRef<HTMLDivElement>;
  @ViewChild('d3', { static: true }) label3!: ElementRef<HTMLDivElement>;


  constructor(private renderer: Renderer2) {}
    ngAfterViewInit(): void {
  console.log('ngAfterViewInit');
  if (this.menu) {
    this.renderer.listen(this.menu.nativeElement, 'click', () => {
      this.toggleMenu();
    });
  }
}


toggleMenu(): void {
  console.log('toggleMenu');
  console.log('A before:', this.A);

  if (this.side) {
    const backgroundColor = this.A === 0 ? 'red' : 'rgb(160, 235, 235)';
    const width = this.A === 0 ? '300px' : '60px';

    this.renderer.setStyle(this.side.nativeElement, 'backgroundColor', backgroundColor);
    this.renderer.setStyle(this.side.nativeElement, 'width', width);

    [this.label1, this.label2, this.label3].forEach(label => {
      if (label && label.nativeElement) {
        const display = this.A === 0 ? 'block' : 'none';
        this.renderer.setStyle(label.nativeElement, 'display', display);
      }
    });

    this.A = this.A === 0 ? 1 : 0;
  }

  console.log('A after:', this.A);
}
on3(){

}

  }
     




