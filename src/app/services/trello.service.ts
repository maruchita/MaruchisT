import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment';

@Injectable()
export class TrelloService {

  public url: string;
 
  constructor(
      public http: HttpClient
  ){
      this.url = environment.url;
  }

  getAllBoards(user:User): Observable<any>{
    return this.http.get(this.url+ '/members/'+ user.username+'/boards?filter=all&fields=all&lists=all&memberships=none&organization=false&organization_fields=name%2CdisplayName&key='+ user.key+'&token='+ user.token);
  }

  getBoard(id:string, user:User): Observable<any>{
    return this.http.get(this.url+'/boards/'+id+'/lists?cards=all&card_fields=all&filter=all&fields=all&key='+ user.key+'&token='+ user.token);
  }
  getCards(id:string,user:User): Observable<any>{
    return this.http.get(this.url+'lists/'+id+'/cards?fields=id,name,badges,labels&key='+ user.key+'&token='+ user.token);
  }

}
