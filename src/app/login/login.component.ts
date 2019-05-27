import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = null;
  passWord:string = null;
  operation:string = "login";
  constructor(private authenticationService:AuthenticationService ) { }

  ngOnInit() {
  }
  login(){
    this.authenticationService.loginWithEmail(this.email, this.passWord).then(
      (data)=>{
        alert('Usuario logueado correctamente');
        console.log(data);
      }
    ).catch( (error) =>{
      alert('Ocurrió un error');
      console.log(error);
    });
  }

  register(){
    this.authenticationService.registerWithEmail(this.email, this.passWord).then(
      (data)=>{
        alert('Usuario registrado correctamente');
        console.log(data);
      }
    ).catch( (error) =>{
      alert('Ocurrió un error');
      console.log(error);
    });
  }
}
