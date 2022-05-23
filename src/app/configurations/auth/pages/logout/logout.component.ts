import { Component, OnInit } from '@angular/core';
import { IAuthService } from '@Configuration';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: IAuthService) {
    this.doLogout()
  }

  ngOnInit(): void {
  }

  doLogout() {
    this.authService.doLogOut()
  }
}
