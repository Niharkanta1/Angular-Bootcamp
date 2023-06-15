import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimOutletName'
})
export class TrimOutletNamePipe implements PipeTransform {

  transform(title: string, ...args: unknown[]): unknown {
    var lastIndex = title.lastIndexOf(" - ");
    return title.substring(0, lastIndex);
  }

}
