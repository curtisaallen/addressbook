import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letterFilter'
})
export class LetterFilterPipe implements PipeTransform {

  transform(items: any, value?: any): any {
    if( value === undefined) return items;
    console.log(value);
    return items.filter(function (item) {
        return item.first_name[0].toLowerCase().includes(value[0].toLowerCase());
    });


  }

}
