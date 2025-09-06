import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeCasePipe'
})
export class ChangeCasePipePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    return value.substr(0,2);
  }

}
