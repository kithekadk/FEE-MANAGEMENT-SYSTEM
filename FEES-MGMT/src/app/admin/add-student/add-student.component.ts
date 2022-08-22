import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentservicesService } from 'src/app/services/studentservices.service';
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
  constructor(private StudentservicesService:StudentservicesService,
    private router:Router) { }

  ngOnInit(): void {
  }

  addNewStudent(){
    this.StudentservicesService.addStudent(this.student)

    this.router.navigate(['admin/allstudents'])
  }
  
}
