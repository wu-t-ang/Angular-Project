import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ListTopRoomsComponent } from './list-top-rooms/list-top-rooms.component';
import { ListRoomsComponent } from './list-rooms/list-rooms.component';
import { RoomComponent } from './room/room.component';
import { DetailRoomComponent } from './detail-room/detail-room.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FormAddRoomComponent } from './form-add-room/form-add-room.component';
import { RoomTopComponent } from './room-top/room-top.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ProfileComponent } from './profile/profile.component';
import {authInterceptorProviders} from './helps/auth.interceptor';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HomeUserComponent,
    WelcomeComponent,
    ContactusComponent,
    ListTopRoomsComponent,
    ListRoomsComponent,
    RoomComponent,
    DetailRoomComponent,
    FormAddRoomComponent,
    RoomTopComponent,
    BoardAdminComponent,
    ProfileComponent,
    NotfoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
