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
  id!:number
  updating :boolean = false;
  constructor(private StudentservicesService:StudentservicesService,
    private router:Router) { 
      this.StudentservicesService.update.subscribe(
        (value:number)=>{
          this.router.navigate(['admin/addstudent'])
          this.id=value
          this.student = this.StudentservicesService.getOneStudent(value)
          console.log(this.student);
          
          this.updating = true
          
        }
      )
    }

  ngOnInit(): void {
  }

  addNewStudent(){
    this.StudentservicesService.addStudent(this.student)

    this.router.navigate(['admin/allstudents'])
  }
  
}
