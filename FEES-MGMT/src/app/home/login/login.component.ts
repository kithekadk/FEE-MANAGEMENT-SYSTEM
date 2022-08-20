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


staticInput:data={
  email:"",
  password:""
}

Login(){
  if(this.staticInput.email == "kakinyidk@gmail.com" && this.staticInput.password == "12345678"){
      this.router.navigate(['admin'])
  }
  console.log(this.staticInput.email == "kakinyidk@gmail.com" && this.staticInput.password=="12345678");
  
}


  ngOnInit(): void {
    
  }

}


