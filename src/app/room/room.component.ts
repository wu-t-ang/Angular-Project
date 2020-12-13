import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Room} from '../model/Room';
import {ImageService} from '../shared/image.service';
import {RoomService} from '../shared/room.service';
import {TokenStorageService} from '../shared/token-storage.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  retrievedImage: any;
  retrieveResonse: any;
  // tslint:disable-next-line:variable-name
  @Input() prix_input: number;
@Input() room: Room;
  @Input() access: boolean;
  isLoggedIn = false;
Role: string;
currentuser: any;
  @Output() notifacation = new EventEmitter<Room>();

  constructor(private imageService: ImageService, private serviceroom: RoomService , private token: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.token.getToken();
    if (this.isLoggedIn) {
      this.currentuser = this.token.getUser();
      this.Role = this.currentuser.roles[0];
    }
    this.imageService.getImage(this.room.nom_Image)
      .subscribe(
        res => {
          this.retrieveResonse = res;

          this.retrievedImage = 'data:image/jpeg;base64,' + this.retrieveResonse.picByte;
        }
      );
  }
  reserver(id)
  {
    this.serviceroom.reserver(id,   this.currentuser.id).subscribe(
      data => {},
      error => {},
      () => {

        this.notifacation.emit(this.room);

      }
    );
  }

  delete_room(id)
  {
    this.serviceroom.deleteRoom(id).subscribe(
      data => {},
      error => {},
      () => {

          this.notifacation.emit(this.room);

      }
    );

  }
}
