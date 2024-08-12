import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  public pipeText: string = "Welome to pipes";
  public pipeJson = {
    "id":1,
    "text": "Test",
    "userId":3
  }

  public pipeDate = new Date();

  pipeArray = ["a", "b", "c", "d", "e"];

  public cars: any = ["BMW", "AUDI", "Mercedes", "Porsche", "Tata", "Mahindra", "Volvo", "Ferrari", "Lambo"];
}
