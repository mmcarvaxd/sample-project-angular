import { Component, OnInit } from '@angular/core';
import { iUserUseCases } from 'src/app/domain/usecases/base/iUser.usecases';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private useruseCases: iUserUseCases) { }

  async ngOnInit(): Promise<void> {
    await this.useruseCases.getUsers();
  }

}
