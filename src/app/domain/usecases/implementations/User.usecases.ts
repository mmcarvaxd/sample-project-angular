import { Injectable } from "@angular/core";
import { IUserHttp } from "src/app/repositories/base/iUser.http";
import { User } from "../../entities/user/user";
import { iUserUseCases } from "../base/iUser.usecases";

@Injectable()
export class UserUseCases extends iUserUseCases {
    userMock: User[] = [
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

    constructor(private us: IUserHttp) { 
        super();
    }

    getUsers(): Promise<User[]> {
        this.us.getUsers()
        return new Promise<User[]>((res) => {
            res(this.userMock);
        });
    }
}