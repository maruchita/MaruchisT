import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable()
export class UserService {

  constructor(private angularFireDataBase:AngularFireDatabase) { }

  getUsers(){
    return this.angularFireDataBase.list('/users');
  }

  getUsersById(uid){
    return this.angularFireDataBase.object('/users'+ uid);
  }
  createUser(user){
    return this.angularFireDataBase.object('/users'+ user.uid).set(user);
  }
}
