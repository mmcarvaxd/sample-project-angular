import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IndexComponent } from './index/index.component';
import { iUserUseCases } from '@UseCases/base/iUser.usecases';
import { UserUseCases } from '@UseCases/implementations/User.usecases';
import { TranslateModule } from '@ngx-translate/core';
import { IUserRepository } from 'src/app/repositories/base/iUser.repository';
import { UserService } from 'src/app/repositories/http/user.service';


@NgModule({
  declarations: [
    HomeComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule
  ],
  providers: [
    {
      provide: iUserUseCases,
      useClass: UserUseCases
    },
    {
      provide: IUserRepository,
      useClass: UserService
    }
  ]
})
export class HomeModule { }
