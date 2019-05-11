import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kilogram'
})
export class KilogramPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return (value / 10.0) + " kg.";
  }

}
