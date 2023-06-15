import { Component, OnInit } from '@angular/core';
import { PlayerchoiceService } from '../playerchoice.service';

@Component({
  selector: 'app-choose-letter',
  templateUrl: './choose-letter.component.html',
  styleUrls: ['./choose-letter.component.css']
})
export class ChooseLetterComponent implements OnInit {
  letter = '';

  constructor(public choice: PlayerchoiceService) { }

  ngOnInit(): void {

  }

  // Function to choose a letter (x or o)
  chooseLetter(letter: string) {
    this.choice.letterError = '';

    if (letter === 'x') {
      this.choice.letter = 'x';
    } else {
      this.choice.letter = 'o';
    }
  }

  // Function to update player choices (letter and opponent)
  updatePlayers(choice: string) {
    if (this.choice.letter === '') {
      this.choice.letterError = 'Please choose a letter';
    } else {
      if (choice === 'CPU') {
        this.choice.opponent = 'CPU';
      } else {
        this.choice.opponent = 'Player';
      }

      this.choice.showBoard = true;
      this.choice.showHome = false;
    }
  }
}
