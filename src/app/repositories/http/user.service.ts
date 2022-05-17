import { Injectable } from '@angular/core';
import { User } from '@Entities/user/user';
import { IUserHttp } from '../base/iUser.http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends IUserHttp{
  getUsers(): Promise<User[]> {
    console.log("aaa")
    throw new Error('Method not implemented.');
  }

  constructor() {
    super()
   }
}
