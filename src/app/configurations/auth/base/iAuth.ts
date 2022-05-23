import { AuthConfiguration } from "../classes/iAuth";

export abstract class IAuthService {
    abstract doLogin(): void
    abstract goLogin(): void
    abstract doLogOut(): void
    abstract getConfiguration(): AuthConfiguration
    abstract getToken(): string
    abstract doRefreshToken(): void
    abstract isTokenValid(): boolean
    abstract getLoggedUser(): any 
}