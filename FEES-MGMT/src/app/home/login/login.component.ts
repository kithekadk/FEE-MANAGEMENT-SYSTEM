import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface data{
  email:string
  password:string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }



input:data={
  email:"kakinyidk@gmail.com",
  password:"12345678"
}
onLogin(input:data){
console.warn(input);
// console.warn(input == this.input);
this.toAdminDashboard()
}

toAdminDashboard(){
  this.router.navigate(['admin'])
}

  ngOnInit(): void {
    console.warn(this.input);
    
  }

}


