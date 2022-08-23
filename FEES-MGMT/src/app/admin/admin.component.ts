import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
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
  withBalances(){
    this.router.navigate(['withbalance'], {relativeTo: this.route});
  }
  WOBalances(){
    this.router.navigate(['WObalance'], {relativeTo: this.route});
  }

}
