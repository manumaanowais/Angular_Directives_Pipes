import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  div1Bg="bg-success"
  isDiv2Active=true;

  addRed() {
    this.div1Bg="bg-danger"
  }
  addBlue(){
    this.div1Bg="bg-primary"
  }

  toggle() {
    this.isDiv2Active = !this.isDiv2Active
  }

  str1="";
  str2=""

  stylesBlock= {
    "color":"red",
    "background-color":'aqua'
  }

  classBlock={
    "text-success" : true,
    "text-lowercase": true
  }

  isActive=true;
}
