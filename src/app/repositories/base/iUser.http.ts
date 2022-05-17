import { User } from "@Entities/user/user";

export abstract class IUserHttp {
    abstract getUsers(): Promise<User[]>
}