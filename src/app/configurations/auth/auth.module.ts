import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAuthService } from './base/iAuth';
import { AuthService } from './auth.service';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    OAuthModule.forRoot(),
    HttpClientModule
  ],
  exports: [
    LoginComponent,
    LogoutComponent
  ],
  providers: [
    {
      provide: IAuthService,
      useClass: AuthService
    }
  ]
})
export class AuthModule { }
