import { AsyncPipe, CommonModule, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval, map, Observable, of } from 'rxjs';
import { FilterPipe } from '../../pipe/filter.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, JsonPipe, DatePipe, DecimalPipe, CurrencyPipe, PercentPipe, SlicePipe,AsyncPipe, FormsModule, CommonModule, FilterPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  public pipeText: string = "Welcome to pipes";
  public pipeJson = {
    "id":1,
    "text": "Test",
    "userId":3
  }

  public pipeDate = new Date();

  pipeArray = ["a", "b", "c", "d", "e"];

  public cars: any = ["BMW", "AUDI", "Mercedes", "Porsche", "Tata", "Mahindra", "Volvo", "Ferrari", "Lambo"];

  public strPromise = Promise.resolve("Hello world");
  public strObs= of("Hello Pipes")

  public searchedCar = "";
  public currentTime: Observable<Date> = new Observable<Date>
  constructor() {
    this.currentTime = interval(1000).pipe(map(() => new Date()))
  }
}
