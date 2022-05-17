import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IndexComponent } from './index/index.component';
import { iUserUseCases } from '@UseCases/base/iUser.usecases';
import { UserUseCases } from '@UseCases/implementations/User.usecases';


@NgModule({
  declarations: [
    HomeComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [
    {
      provide: iUserUseCases,
      useClass: UserUseCases
    }
  ]
})
export class HomeModule { }
