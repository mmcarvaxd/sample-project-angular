import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@Configuration/auth/pages/login/login.component';
import { LogoutComponent } from '@Configuration/auth/pages/logout/logout.component';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./presentations/views/home/home.module').then(m => m.HomeModule)
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'logout',
  component: LogoutComponent
}, {
  path: '**',
  redirectTo: '/home',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
