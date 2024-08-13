import { Component } from '@angular/core';
import { BackgroundColorDirective } from '../../../directive/background-color.directive';

@Component({
  selector: 'app-custom',
  standalone: true,
  imports: [BackgroundColorDirective],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.css'
})
export class CustomComponent {

}
