import { Component, OnInit } from '@angular/core';
import { StudentservicesService } from 'src/app/services/studentservices.service';

import { studentData } from '../all-students/interfaces/interface';

@Component({
  selector: 'app-withoutbalance',
  templateUrl: './withoutbalance.component.html',
  styleUrls: ['./withoutbalance.component.css']
})
export class WithoutbalanceComponent implements OnInit {
  studentWObalance!:studentData[]
  constructor(private studentservice:StudentservicesService) { }

  ngOnInit(): void {
    this.studentWObalance = this.studentservice.getWithoutBalance()
  }

}
