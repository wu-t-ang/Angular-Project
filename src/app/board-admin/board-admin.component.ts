import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {Room} from '../model/Room';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
content: string;


  constructor(private userservice: UserService) { }


  ngOnInit(): void {

    this.userservice.getAdminBoard().subscribe(
      data => {
        console.log(data);
        this.content = data;
      },
      error => {
        this.content = JSON.parse(error.error).message;
      }
    );
  }

}
