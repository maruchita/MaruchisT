import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthenticationService {

  constructor(private angularFireAuth:AngularFireAuth) { }

  loginWithEmail(email:string, passWord:string){
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, passWord);
  }

  registerWithEmail(email:string, passWord:string){
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, passWord);
  }

  getStatus(){
    return this.angularFireAuth.authState;
  }

  logOut(){
    return this.angularFireAuth.auth.signOut();
  }
}
