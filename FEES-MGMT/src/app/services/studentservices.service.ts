import { EventEmitter, Injectable } from '@angular/core';
import { studentData } from '../admin/all-students/interfaces/interface';


@Injectable({
  providedIn: 'root'
})
export class StudentservicesService {

  constructor() { }
  update = new EventEmitter<number>()
  private studentDetails: studentData[]=[

    {
      name:'dan',
      class : 'form1',
      gender : 'male',
      balance: 0
    },
    {
      name:'dan2',
      class : 'form1',
      gender : 'male',
      balance: 0
    }
  ]
  getAllStudents() {
    return this.studentDetails
  }
  
  getOneStudent(index:number){
    return this.studentDetails[index]
  }

  getWithBalance(){
    const bal = this.studentDetails.filter((el)=>{
      return el.balance > 0
    })
    return bal
  }

  getWithoutBalance(){
    const bal1 = this.studentDetails.filter((el)=>{
      return el.balance <= 0
    })
    return bal1
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
