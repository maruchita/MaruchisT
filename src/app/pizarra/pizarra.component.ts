import { Card } from './../interfaces/card';
import { User } from './../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { TrelloService } from '../services/trello.service';
import { Board } from '../interfaces/board';
import { List } from '../interfaces/list';


@Component({
  selector: 'app-pizarra',
  templateUrl: './pizarra.component.html',
  styleUrls: ['./pizarra.component.css']
})
export class PizarraComponent implements OnInit {
  boards:Array<Board> = [];
 userCurrent:User = {username: "maru451",
 key:"4e937bf17d0b7f030be33829f7a20d37",
 token:"a94807cc9501ee8fbd58f9261319e8ab5ade2bf8176ecf0bacc87a0dbc56bc28"};
   constructor (public trello:TrelloService ) {
   
     this.trello.getAllBoards(this.userCurrent).subscribe(
       (result:Board[]) => {
         for(let b of result){
           this.trello.getBoard(b.id, this.userCurrent).subscribe(
             (lists:List[]) => {
              // for(let l of lists){
              //   this.trello.getCards(l.id,this.userCurrent).subscribe(
              //     (cards:Card[]) => {
              //       l.cards = cards;
              //     }
              //   );
               b.lists = lists;
               this.boards.push(b);
             }
            
           );
         }
          
               console.log(this.boards);
          
 
       },
       error => {
           console.log(<any>error);
       }
   );
   }
 
   ngOnInit() {
     
 }
 
 
 }
 
