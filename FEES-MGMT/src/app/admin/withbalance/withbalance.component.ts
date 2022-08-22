import { Component, OnInit } from '@angular/core';
import { StudentservicesService } from 'src/app/services/studentservices.service';
import { studentData } from '../all-students/interfaces/interface';

@Component({
  selector: 'app-withbalance',
  templateUrl: './withbalance.component.html',
  styleUrls: ['./withbalance.component.css']
})
export class WithbalanceComponent implements OnInit {
  studentwithBal!: studentData[]

  constructor( private studentService:StudentservicesService) { }

  ngOnInit(): void {
    this.studentwithBal=this.studentService.getWithBalance()
  }

}
