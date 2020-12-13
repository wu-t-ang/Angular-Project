import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {ContactusComponent} from './contactus/contactus.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ListRoomsComponent} from './list-rooms/list-rooms.component';
import {DetailRoomComponent} from './detail-room/detail-room.component';
import {ProfileComponent} from './profile/profile.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';


const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'login', component: LoginComponent},
  {path: 'rooms', component: ListRoomsComponent},
  {path: 'welcome/rooms', component: ListRoomsComponent},
  {path: 'rooms/detail/:id', component: DetailRoomComponent},
  {path: 'welcome/rooms/detail/:id', component: DetailRoomComponent},
  {path: 'welcome/detail/:id', component: DetailRoomComponent},
  {path: 'admin/detail/:id', component: DetailRoomComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'admin', component: BoardAdminComponent},

  {path: '', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
