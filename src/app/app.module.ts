import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { User } from './interfaces/user';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PizarraComponent } from './pizarra/pizarra.component';
import { PerfilComponent } from './perfil/perfil.component';
import {Routes, RouterModule} from '@angular/router';
import { MenuComponent } from './menu/menu.component';

import {HttpClientModule} from '@angular/common/http';
import { TrelloService } from './services/trello.service';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule }   from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';


const appRoutes: Routes = [
  { path: '', component: AppComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'pizarra', component: PizarraComponent},
  { path: 'perfil', component: PerfilComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PizarraComponent,
    PerfilComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes), 
    HttpClientModule,  
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,// imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [TrelloService, AuthenticationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
