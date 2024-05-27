import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  user= {
    username: "admin",
    password: "admin123"
  }

  uname=""
  pswd=""

  constructor(private router:Router){

  }

  handleLogin(){
    console.log(this.uname,this.pswd)
    if(this.uname==this.user.username && this.pswd==this.user.password){
      alert("User Login Successfull!")
      this.router.navigateByUrl('dash')
    }
    else{
      alert("Invalid Username / Password!")
    }
    
  }

}
