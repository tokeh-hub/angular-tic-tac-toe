import { Component } from '@angular/core';
import { PlayerchoiceService } from './playerchoice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tic-tac-toe';
  constructor(public choice:PlayerchoiceService) { }
}
