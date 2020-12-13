import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../shared/token-storage.service';
import {RoomService} from '../shared/room.service';
import {Room} from '../model/Room';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  access: boolean;
  curentuser: any;
  listrooms: Room[];

  constructor(private token: TokenStorageService, private serviceroom: RoomService) { }

  ngOnInit(): void {
    this.access = false;
    this.listrooms = [];
    this.curentuser = this.token.getUser();
    this.serviceroom.get_all_reservation(    this.curentuser.id).subscribe(
      (data: Room[]) => {
        this.listrooms = data;
      }
    );

  }
  changer ()
  {
    if (this.access == true)
    {
      this.access = false;
    }
    else
    {
      this.access = true;
    }
  }

}
