import { Injectable } from '@angular/core';


interface data{
  email:string
  password:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

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
