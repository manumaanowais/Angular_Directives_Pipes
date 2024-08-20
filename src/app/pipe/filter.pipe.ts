import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(cars: any[], searchedCar: string) {
    if(!cars) {
      return [];
    }
    if(!searchedCar) {
      return cars
    }
    return cars.filter((car) => car.toLowerCase().includes(searchedCar.toLowerCase()))
  }

}
