import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnit: string): any {
    if(!value) {
      return "";
    } 
    switch(targetUnit) {
      case 'm': return value * 1.60934 * 1000;
      case 'km': return value * 1.60934;
      default: throw new Error("Target unit is not defined.");
    }
  }

}
