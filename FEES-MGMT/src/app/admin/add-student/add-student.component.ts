import { Component, OnInit } from '@angular/core';
import { StudentservicesService } from 'src/app/studentservices.service';
import { studentData } from '../all-students/interfaces/interface';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student:studentData={
    name:'',
    class:'',
    gender:'',
    balance:0
  }
  constructor(private StudentservicesService:StudentservicesService) { }

  ngOnInit(): void {
  }

  addNewStudent(){
    this.StudentservicesService.addStudent(this.student)
  }
  
}
