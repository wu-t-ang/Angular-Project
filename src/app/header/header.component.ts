import { Component, OnInit } from '@angular/core';
import {Role} from '../model/Role';
import {TokenStorageService} from '../shared/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showAdminBoard = false;
  username: string;
  private roles: Role[];
  isLoggedIn = false;
  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn)
    {const user = this.tokenStorage.getUser();
     this.roles = user.roles;
     // @ts-ignore
     this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
     this.username = user.username;
    }

  }
logout()
{
  this.tokenStorage.signOut();
  window.location.reload();
}
}
