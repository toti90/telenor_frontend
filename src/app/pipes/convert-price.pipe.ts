import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class ConvertPricePipe implements PipeTransform {

  transform(value: string): string {
    let reversed = value.split('').reverse().join('');
    reversed = [reversed.slice(0, 3), '.', reversed.slice(3)].join('');
    return reversed.split('').reverse().join('');
  }

}
