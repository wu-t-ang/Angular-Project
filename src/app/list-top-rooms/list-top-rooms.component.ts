import { Component, OnInit } from '@angular/core';
import {RoomService} from '../shared/room.service';
import {Room} from '../model/Room';

@Component({
  selector: 'app-list-top-rooms',
  templateUrl: './list-top-rooms.component.html',
  styleUrls: ['./list-top-rooms.component.css']
})
export class ListTopRoomsComponent implements OnInit {

  list_Rooms: Room[];

  constructor(private serviceroom: RoomService ) { }

  ngOnInit(): void {
    this.list_Rooms = [] ;
    this.serviceroom.getTOPRooms().subscribe(
      (data: Room[]) => {
        console.log(data);
        this.list_Rooms = data;
      }
    );


  }



}
