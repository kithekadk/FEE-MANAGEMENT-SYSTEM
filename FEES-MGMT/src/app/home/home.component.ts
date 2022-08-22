import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router , private route:ActivatedRoute) { }


  view:boolean=true;
  viewform:boolean= false

  toLogin(){
    this.router.navigate(['login'], {relativeTo: this.route});
    this.view= false
    this.viewform= true
  }
  toLogout(){
    this.router.navigate(['home'], {relativeTo: this.route});
  }
  
  ngOnInit(): void {
  }

}
