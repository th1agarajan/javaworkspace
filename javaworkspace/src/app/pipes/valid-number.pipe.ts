import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validNumber'
})
export class ValidNumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
