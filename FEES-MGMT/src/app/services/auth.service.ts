import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


interface data{
  email:string
  password:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  isLoggedin:boolean=false;
  
  Input:data={
    email:"kakinyidk@gmail.com",
    password:"12345678"
  }
  
  Login(){
    return this.Input
  }

  authenticated(){
    return localStorage.getItem('email') == this.Login().email && localStorage.getItem('password') == this.Login().password
  }
  

}
