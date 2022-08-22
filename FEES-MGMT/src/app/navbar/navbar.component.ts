import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router , private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  toLogin(){
    this.router.navigate(['login'], {relativeTo: this.route});
  }
  toLogout(){
    localStorage.clear()
    this.router.navigate(['home'], {relativeTo: this.route});
  }

}
