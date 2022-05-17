import { User } from "../../entities/user/user";

export abstract class iUserUseCases {
    abstract getUsers(): Promise<User[]>;
}