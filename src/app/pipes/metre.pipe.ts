import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'metre'
})
export class MetrePipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return (value / 10.0) + " m.";
  }

}
