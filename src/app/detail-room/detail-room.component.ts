import { Component, OnInit } from '@angular/core';
import {RoomService} from '../shared/room.service';
import {Room} from '../model/Room';
import {ActivatedRoute} from '@angular/router';
import {ImageService} from '../shared/image.service';

@Component({
  selector: 'app-detail-room',
  templateUrl: './detail-room.component.html',
  styleUrls: ['./detail-room.component.css']
})
export class DetailRoomComponent implements OnInit {
  retrievedImage: any;
  retrieveResonse: any;
  room: Room;
  constructor(private serviceroom: RoomService, private service: ActivatedRoute, private imageService: ImageService) { }

  ngOnInit(): void {
    this.serviceroom.getRoom(this.service.snapshot.params.id).subscribe(
      (data: Room) => {
        console.log(data);
        this.room = data;
      },
      (error) => {},
      () =>  {

        this.imageService.getImage(this.room.nom_Image)
          .subscribe(
            res => {

              this.retrieveResonse = res;

              this.retrievedImage = 'data:image/jpeg;base64,' + this.retrieveResonse.picByte;

            }
          );
      }
    );

  }

}
