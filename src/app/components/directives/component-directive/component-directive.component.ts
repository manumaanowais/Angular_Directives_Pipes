import { Component } from '@angular/core';
import { NotFoundComponent } from "../../not-found/not-found.component";

@Component({
  selector: 'app-component-directive',
  standalone: true,
  imports: [NotFoundComponent],
  templateUrl: './component-directive.component.html',
  styleUrl: './component-directive.component.css'
})
export class ComponentDirectiveComponent {

}
