import { Component } from '@angular/core';
import { NotFoundComponent } from "../../not-found/not-found.component";
import { StructuralDirectiveComponent } from "../structural-directive/structural-directive.component";

@Component({
  selector: 'app-component-directive',
  standalone: true,
  imports: [NotFoundComponent, StructuralDirectiveComponent],
  templateUrl: './component-directive.component.html',
  styleUrl: './component-directive.component.css'
})
export class ComponentDirectiveComponent {

}
