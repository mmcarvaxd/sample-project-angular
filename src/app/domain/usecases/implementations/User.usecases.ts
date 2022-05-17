import { Injectable } from "@angular/core";
import { IUserRepository } from "src/app/repositories/base/iUser.repository";
import { User } from "../../entities/user/user";
import { iUserUseCases } from "../base/iUser.usecases";

@Injectable()
export class UserUseCases extends iUserUseCases {
    
    constructor(private us: IUserRepository) { 
        super();
    }

    getUsers(): Promise<User[]> {
        return this.us.getUsers()
    }
}