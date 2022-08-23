import { Pipe, PipeTransform } from '@angular/core';
import { studentData } from '../admin/all-students/interfaces/interface';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(name: string, gender: string): string {
    
      if (gender== 'female'){
        return 'Miss. '+ name
      }else{
        return 'Mr. '+ name
      }
    }
  }

