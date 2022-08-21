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
  yes = (this.staticInput.email == this.auth.Login().email && this.staticInput.password == this.auth.Login().password)
  Login(){
    
      if (this.yes){
      this.router.navigate(['admin'])
      }
      console.log(this.staticInput.email == "kakinyidk@gmail.com" && this.staticInput.password=="12345678");
      // this.router.navigate(['/'])
      
  }

  ngOnInit(): void {
    
  }

}


