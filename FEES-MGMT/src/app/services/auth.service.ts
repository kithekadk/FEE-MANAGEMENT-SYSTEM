import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../home/login/login.component';


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
    this.isLoggedin=true;
    return this.authenticated
  }

}
