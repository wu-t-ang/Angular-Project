import {Component, Input, OnInit} from '@angular/core';
import {Room} from '../model/Room';
import {ImageService} from '../shared/image.service';

@Component({
  selector: 'app-room-top',
  templateUrl: './room-top.component.html',
  styleUrls: ['./room-top.component.css']
})
export class RoomTopComponent implements OnInit {
  retrievedImage: any;
  retrieveResonse: any;
  @Input() room: Room;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.getImage(this.room.nom_Image)
      .subscribe(
        res => {
          this.retrieveResonse = res;

          this.retrievedImage = 'data:image/jpeg;base64,' + this.retrieveResonse.picByte;
        }
      );
  }

}
