import { Component, OnInit } from '@angular/core';
import { IAuthService } from '@Configuration/auth';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private authService: IAuthService) { 
    this.authService.doLogin()
    console.log(this.authService.doRefreshToken())
  }

  ngOnInit(): void {
  }

}
