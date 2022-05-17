import { User } from "@Entities/user/user";

export abstract class IUserRepository {
    abstract getUsers(): Promise<User[]>
}