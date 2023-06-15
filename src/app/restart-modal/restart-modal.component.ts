import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { PlayerchoiceService } from '../playerchoice.service';
import { TileService } from '../tile.service';
import { Tile } from 'src/app/Tile';

@Component({
  selector: 'app-restart-modal',
  templateUrl: './restart-modal.component.html',
  styleUrls: ['./restart-modal.component.css']
})
export class RestartModalComponent implements OnInit {

  constructor(public choice: PlayerchoiceService, public tileService: TileService) { }

  ngOnInit(): void {
   
  }

  // Reset the game
  reset() {
    // Reset game statistics
    this.choice.numberOfWinsO = 0;
    this.choice.numberOfWinsX = 0;
    this.choice.numberOfTies = 0;

    // Hide the restart modal
    this.choice.showRestartModal = false;

    // Clear content and contentIndices
    this.choice.content = '';
    this.choice.contentIndices = [];

    // Reset tiles based on opponent type
    if (this.choice.opponent === "CPU") {
      this.choice.turn = 'x'; // Reset turn to 'x'
      this.choice.tiles.forEach(tile => {
        tile.content = ''; // Clear tile content
        tile.clicked = false; // Reset clicked state
      });
    }

    if (this.choice.opponent === "Player") {
      this.tileService.resetTiles("restart"); // Reset tiles using TileService for Player opponent
    }
  }

  // Cancel the restart
  cancel() {
    // Hide the restart modal
    this.choice.showRestartModal = false;

    // Clear content and contentIndices
    this.choice.content = '';
    this.choice.contentIndices = [];
  }
}
