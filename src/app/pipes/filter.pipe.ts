import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchString?: string): any {
   console.log(searchString); 
   if (typeof value !== 'undefined' && typeof searchString !== 'undefined') {
      return value.filter((e) => {
        return e.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
      });
    } else {
     return value;
    }
  }
}
