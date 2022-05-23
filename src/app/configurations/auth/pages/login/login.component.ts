import { Component, OnInit } from '@angular/core';
import { IAuthService } from '@Configuration';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: IAuthService) {
    this.doLogin()
  }

  ngOnInit(): void {
  }

  doLogin() {
    this.authService.goLogin()
  }
}
