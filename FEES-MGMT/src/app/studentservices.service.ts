import { Injectable } from '@angular/core';
import { studentData } from './admin/all-students/interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class StudentservicesService {

  constructor() { }

  studentDetails: studentData[]=[

    {
      name:'dan',
      class : 'form1',
      gender : 'male',
      balance: 1000
    },
    {
      name:'dan2',
      class : 'form1',
      gender : 'male',
      balance: 1000
    }
  ]
  getAllStudents() {
    return this.studentDetails
  }

  getOnestudent(index:number){
    return this.studentDetails[index]
  }

  updateStudent(index:number, updatedStudent:studentData){
    return this.studentDetails[index] = updatedStudent
  }

  deleteStudent(index:number){
    return this.studentDetails.splice(index, 1)
  }

  addStudent(newStudent:studentData){
    return this.studentDetails.push(newStudent)
  }

}
