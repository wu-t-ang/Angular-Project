import {User} from './User';

export class Room
{
  id: string;
  num_room: string;
  prix_room: number;
  type: string;
  nom_Image: string;
  description: string;
  etat: string;
  users: User;

}
