import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = null;
  passWord:string = null;
  userName:string = null;
  key:string = null;
  token:string = null;
  operation:string = "login";
  constructor(private authenticationService:AuthenticationService, private userService:UserService ) { }

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
        const user={
          uid : data.user.uid,
          userName: this.userName,
          key : this.key,
          token : this.token

        };
        this.userService.createUser(user).then((data2)=>{
          alert('Usuario registrado correctamente');
        console.log(data2);
        }
      ).catch((error)=>{
        alert('Ocurrió un error');
      console.log(error);
      });
        
      }
    ).catch( (error) =>{
      alert('Ocurrió un error');
      console.log(error);
    });
  }
}
