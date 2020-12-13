import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Room} from '../model/Room';
import {ImageService} from '../shared/image.service';
import {RoomService} from '../shared/room.service';
import {TokenStorageService} from '../shared/token-storage.service';
import {User} from '../model/User';

@Component({
  selector: 'app-form-add-room',
  templateUrl: './form-add-room.component.html',
  styleUrls: ['./form-add-room.component.css']
})
export class FormAddRoomComponent implements OnInit {
  RoomForm: FormGroup;
  selectedFile: File;
  @Output() notifacation = new EventEmitter<Room>();
  constructor(private imageService: ImageService , private token: TokenStorageService, private roomservice: RoomService ) { }

  ngOnInit(): void {
    this.RoomForm = new FormGroup({
      num_room: new FormControl('', [Validators.required]),
      prix_room: new FormControl('',[Validators.required]),
      type: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      nom_image: new FormControl('',[Validators.required]),
    });
  }
  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit()
  {
    let room = new Room();
    let user = new User();
    room.num_room=this.RoomForm.get('num_room').value;
    room.prix_room=this.RoomForm.get('prix_room').value;
    room.type=this.RoomForm.get('type').value;
    room.description=this.RoomForm.get('description').value;
    room.etat = 'non reserve';

    room.nom_Image=this.selectedFile.name;
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.imageService.save_Image(uploadImageData);

    user.id = this.token.getUser().id;

    room.users = user;
console.log(room);
        this.roomservice.addRoom(room).subscribe(
          (x: any) => {console.log(x)} ,
          (err) => {console.log(err)}  ,
          () => {    this.notifacation.emit(room); }
        );




  }
}
