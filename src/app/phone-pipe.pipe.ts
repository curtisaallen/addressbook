import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePipe'
})
export class PhonePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    value = value.replace(/[^\d]/g, "");

    //check if number length equals to 10
    if (value.length == 10) {
        //reformat and return value number
        return value.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    }

    return null;

  }

}
