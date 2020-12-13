import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Room} from '../model/Room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
   URL = 'http://localhost:8080/api/room/';
  constructor(private http: HttpClient) { }

  getRooms()
  {
    return this.http.get(this.URL);
  }
  getTOPRooms()
  {
    return this.http.get(this.URL + 'top');
  }
  getRoom(id: string)
  {

    return this.http.get(this.URL + id);
  }
  addRoom(room: Room)
  {

    return this.http.post(this.URL , room);
  }
  deleteRoom(id)
  {
    return this.http.delete(this.URL + id);
  }
  reserver(id_room,id_user)
  {
    return this.http.put(this.URL + 'reserver/' + id_room + '/' + id_user, '');
  }

  get_all_reservation(id_user)
  {
    return this.http.get(this.URL + 'user/'+id_user);
  }
}
