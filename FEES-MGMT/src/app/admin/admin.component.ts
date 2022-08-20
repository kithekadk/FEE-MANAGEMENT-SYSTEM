import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { StudentservicesService } from '../studentservices.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  // providers: [StudentservicesService]
})
export class AdminComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  addStudent(){
    this.router.navigate(['addstudent'], {relativeTo: this.route});
  }
  allStudents(){
    this.router.navigate(['allstudents'], {relativeTo: this.route});
    
  }

}
