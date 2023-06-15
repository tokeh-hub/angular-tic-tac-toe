import { Component, OnInit } from '@angular/core';
import { PlayerchoiceService } from '../playerchoice.service';
import { TileService } from '../tile.service';

@Component({
  selector: 'app-tie-modal',
  templateUrl: './tie-modal.component.html',
  styleUrls: ['./tie-modal.component.css']
})
export class TieModalComponent implements OnInit {

  constructor(public choice: PlayerchoiceService, public tileService: TileService) { }

  ngOnInit(): void {
    
  }

  // Quit the game
  quit() {
    // Reset game statistics
    this.choice.winner = '';
    this.choice.numberOfWinsX = 0;
    this.choice.numberOfWinsO = 0;
    this.choice.numberOfTies = 0;

    // Reset tiles and turn based on opponent type (CPU)
    if (this.choice.opponent === "CPU") {
      this.choice.turn = 'x';
      this.choice.tiles.forEach(tile => {
        tile.content = '';
        tile.clicked = false;
      });
    }

    // Reset tiles and intervals based on opponent type (Player)
    if (this.choice.opponent === "Player") {
      this.tileService.resetTiles("tie");
      this.tileService.updateTilesInterval();
      this.tileService.updateTurnInterval();
    }

    // Reset display states
    this.choice.showHome = true;
    this.choice.showBoard = false;
    this.choice.content = '';
    this.choice.contentIndices = [];
  }

  // Replay the game
  replay() {
    // Reset tiles and intervals based on opponent type (CPU)
    if (this.choice.opponent === "CPU") {
      this.choice.tiles.forEach(tile => {
        tile.content = '';
        tile.clicked = false;
      });
    }
    // Reset tiles and intervals based on opponent type (Player)
    else if (this.choice.opponent === "Player") {
      this.tileService.resetTiles("tie");
      this.tileService.updateTilesInterval();
      this.tileService.updateTurnInterval();
    }

    // Reset turn and play for 'o' if necessary
    if (this.choice.opponent === "CPU") {
      this.choice.turn = 'x';

      if (this.choice.letter === 'o') {
        this.choice.computerPlay();
      }
    }
    else {
      this.choice.turn = 'x';
    }

    // Reset other game states and display properties
    this.choice.winner = '';
    this.choice.content = '';
    this.choice.contentIndices = [];
    this.choice.isTie = false;
    this.choice.tie = false;
  }
}
