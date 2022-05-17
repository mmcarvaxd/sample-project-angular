import { Injectable } from '@angular/core';
import { User } from '@Entities/user/user';
import { IUserRepository } from '../base/iUser.repository';

@Injectable({
  providedIn: 'root'
})
export class UserService extends IUserRepository {
  getUsers(): Promise<User[]> {
    return new Promise(res => {
      const userMock: User[] = [
        {
          id: 1,
          name: "User 1",
          email: "test@test.com.br",
          password: "123456",
        },
        {
          id: 2,
          name: "User 2",
          email: "test2@test.com.br",
          password: "123456",
        }
      ]

      return res(userMock)
    })
  }

  constructor() {
    super()
  }
}
