import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


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

  constructor(private router:Router, private auth:AuthService) { }

  staticInput:data ={
    email:"",
    password:""
  }
  
  validate = false
  
  Login(){
      if (this.staticInput.email == this.auth.Login().email && this.staticInput.password == this.auth.Login().password){


         this.router.navigate(['admin/allstudents'])

         localStorage.setItem('email', this.staticInput.email)
         localStorage.setItem('password', this.staticInput.password)
      }else{
        this.validate = true
        setTimeout(() => {
          this.validate= false
        }, 2000);    
 
      }
  }

  ngOnInit(): void {
    
  }

}


