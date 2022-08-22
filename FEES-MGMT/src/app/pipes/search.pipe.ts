import { Pipe, PipeTransform } from '@angular/core';
import { studentData } from '../admin/all-students/interfaces/interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: studentData[], name: string): studentData[] {
    if (value.length === 0 || name== ''){
      return value;
    }
    const filtered:studentData[] =[]
    for (let item of value){
      if (item.name.toLowerCase().includes(name.toLowerCase())){
        filtered.push(item);
      }
    }
    return filtered;
  }

}
