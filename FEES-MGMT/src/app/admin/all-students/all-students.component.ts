import { Component, OnInit } from '@angular/core';
import { StudentservicesService } from 'src/app/services/studentservices.service';

import { studentData } from './interfaces/interface';


@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {
  studentDetails!: studentData[]

  constructor(private Studentservices:StudentservicesService) {
    
   }
  
  ngOnInit(): void {
    this.studentDetails = this.Studentservices.getAllStudents()

  } 

    
 

}
