import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]',
  standalone: true
})
export class BackgroundColorDirective implements OnInit {

  @Input() appBackgroundColor = "";

  constructor(private el:ElementRef) { }

  @HostListener('click') changeBg() {
    this.el.nativeElement.style.backgroundColor= this.appBackgroundColor || "yellow"
  }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor=this.appBackgroundColor || "yellow"
  }
}
