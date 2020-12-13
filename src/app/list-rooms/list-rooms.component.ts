import {Component, Input, OnInit} from '@angular/core';
import {Room} from '../model/Room';
import {RoomService} from '../shared/room.service';
import {TokenStorageService} from '../shared/token-storage.service';

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.css']
})
export class ListRoomsComponent implements OnInit {
  list_Rooms: Room[];
  prix : number;
  Role: string;
  afficher: boolean;
  isLoggedIn = false;
  @Input() update: boolean;
  constructor(private serviceroom: RoomService , private token: TokenStorageService) { }
  afficher_form()
  {
    if (this.afficher == true)
    {
      this.afficher = false;
    }
    else {
      this.afficher = true;
    }

  }
  updatelist(room: Room)
  {
    this.list_Rooms = [] ;
    this.serviceroom.getRooms().subscribe(
      (data: Room[]) => {

        this.list_Rooms = data;
      }
    );
    this.afficher = false;
  }
  ngOnInit(): void {

    this.afficher = false;
    this.isLoggedIn = !!this.token.getToken();
    if (this.isLoggedIn) {
      this.Role = this.token.getUser().roles[0];
    }
    this.prix = 0;
    this.list_Rooms = [] ;
    this.serviceroom.getRooms().subscribe(
      (data: Room[]) => {

        this.list_Rooms = data;
      }
    );
    if (this.update == true)
    {
      console.log(this.update);
      this.list_Rooms = [] ;
      this.serviceroom.getRooms().subscribe(
        (data: Room[]) => {

          this.list_Rooms = data;
        }
      );
    }


  }


}
