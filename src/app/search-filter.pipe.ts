import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any[], value: any): any[] {
    if( value === undefined) return items;
    return items.filter(function (item) {
        return item.first_name.toLowerCase().includes(value.toLowerCase());
    });
  }

}
