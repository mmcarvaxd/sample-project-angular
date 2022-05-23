import { Injectable } from '@angular/core';
import { environment } from '@Env/environment';
import { NullValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { IAuthService } from './base/iAuth';
import { AuthConfiguration } from './classes/iAuth';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends IAuthService {
  goLogin(): void {
    console.log("loadDiscoveryDocumentAndLogin")
    this.oauthService.tokenValidationHandler = new  NullValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndLogin().then(_ => {
      console.log(_)
    })
  }
  doRefreshToken() {
    this.oauthService.refreshToken();
  }

  getLoggedUser() {
    return this.oauthService.getIdentityClaims()
  }

  doLogin(): void {
    console.log("login inited")
    this.oauthService.initLoginFlow();
    this.oauthService.tryLogin();
  }

  doLogOut(): void {
    this.oauthService.logOut();
  }

  getConfiguration(): AuthConfiguration {
    let authCodeFlowConfig: AuthConfiguration = {
      issuer: environment.oAuth2Issuer,
      redirectUri: environment.oAuth2RedirectUri,
      clientId: environment.oAuth2ClientId,
      responseType: environment.oAuth2ResponseType,
      scope: environment.oAuth2Scope,
      showDebugInformation: environment.oAuth2ShowDebugInformation,
      tokenEndpoint: environment.oAuth2TokenEndpoint
    };

    return authCodeFlowConfig
  }

  getToken(): string {
    return this.oauthService.getAccessToken()
  }

  isTokenValid(): boolean {
    return this.oauthService.hasValidAccessToken()
  }

  constructor(private oauthService: OAuthService) {
    super()

    let configuration: AuthConfiguration = this.getConfiguration()
    this.oauthService.configure({
      issuer: configuration.issuer,
      redirectUri: configuration.redirectUri,
      clientId: configuration.clientId,
      responseType: configuration.responseType,
      scope: configuration.scope,
      showDebugInformation: configuration.showDebugInformation,
      tokenEndpoint: configuration.tokenEndpoint,
      logoutUrl: 'http://localhost:4200/home'
    });

    this.oauthService.tokenEndpoint
  }
}
