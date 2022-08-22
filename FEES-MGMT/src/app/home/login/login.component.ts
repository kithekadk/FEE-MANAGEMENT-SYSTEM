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
  
  
  Login(){
      console.log(this.staticInput.email == this.auth.Login().email && this.staticInput.password == this.auth.Login().password);
      
      if (this.staticInput.email == this.auth.Login().email && this.staticInput.password == this.auth.Login().password){
         console.log('yes');

         this.router.navigate(['admin'])
          localStorage.setItem('email', this.staticInput.email)
          localStorage.setItem('password', this.staticInput.password)
      }else{        
      // this.router.navigate(['admin'])
      // this.router.navigate(['login'])
      }
  }

  ngOnInit(): void {
    
  }

}


