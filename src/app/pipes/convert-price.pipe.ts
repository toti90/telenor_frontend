import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class ConvertPricePipe implements PipeTransform {

  transform(value: string): string {
    return [value.slice(0, 2), '.', value.slice(2)].join('');
  }

}
