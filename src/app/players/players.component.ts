import { Component, OnInit, Input } from '@angular/core';
import { PlayerchoiceService } from '../playerchoice.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  @Input() player1: string = ''; // Input property for player 1
  @Input() player2: string = ''; // Input property for player 2
  @Input() letter1: string = 'X'; // Input property for letter 1
  @Input() letter2: string = 'O'; // Input property for letter 2

  constructor(public choice: PlayerchoiceService) { }

  ngOnInit(): void {
    // Set player names based on opponent type
    if (this.choice.opponent === 'CPU') {
      this.player1 = '(YOU)'; // Player 1 is "YOU"
      this.player2 = '(CPU)'; // Player 2 is "CPU"
    } else if (this.choice.opponent === 'Player') {
      this.player1 = '(YOU)'; // Player 1 is "YOU"
      this.player2 = '(OPP)'; // Player 2 is "OPP" (Opponent)
    }

    // Set letter symbols based on selected letter
    if (this.choice.letter === 'x') {
      this.letter1 = 'X'; // Letter 1 is "X"
      this.letter2 = 'O'; // Letter 2 is "O"
    } else if (this.choice.letter === 'o') {
      this.letter1 = 'O'; // Letter 1 is "O"
      this.letter2 = 'X'; // Letter 2 is "X"
    } else {
      return; // Return if letter is not set
    }
  }
}
