import { Component, OnInit } from '@angular/core';
import { PlayerchoiceService } from '../playerchoice.service';
import { TileService } from '../tile.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(public choice: PlayerchoiceService, public tileService: TileService) { }

  ngOnInit(): void {
    // Initialize variables
    this.choice.contentIndices = [];
    this.choice.content = '';

    // Check opponent type and network connectivity
    if (this.choice.opponent === 'Player') {
      if (!navigator.onLine) {
        this.choice.networkError = "OOPSIE! Please connect to the internet";
      } else {
        this.tileService.resetTiles("board");
        this.tileService.updateTilesInterval();
        this.tileService.updateTurnInterval();
      }
    }

    // If the player is 'o' and the opponent is CPU, make the computer play
    if (this.choice.letter === 'o' && this.choice.opponent === 'CPU') {
      this.choice.computerPlay();
    }
  }

  handleClick(index: any) {
    if (this.choice.opponent === 'CPU') {
      this.playWithComputer(index);
    } else {
      if (this.choice.turnLoading || this.choice.tiles[index].clicked) {
        return; // Ignore click if it's not the player's turn or the tile is already clicked
      } else {
        this.playWithPlayer(index);
      }
    }
  }

  // Handle player's turn in the game against another player
  playWithPlayer(index: any) {
    const tile = this.choice.tiles[index];

    if (this.choice.turn === 'x' && this.choice.letter === 'x') {
      // Player's turn and letter is 'x'
      tile.content = '../../assets/greenx.png';
    } else if (this.choice.turn === 'o' && this.choice.letter === 'o') {
      // Player's turn and letter is 'o'
      tile.content = '../../assets/Oval.png';
    } else {
      return; // Ignore click if it's not the player's turn or the letter doesn't match
    }

    tile.clicked = true;
    this.choice.turnLoading = true;

    // Update the tile and turn on the server
    this.tileService.updateTiles(tile).subscribe(() => {
      this.tileService.getTiles().subscribe((tiles) => {
        this.choice.tiles = tiles;

        const nextTurn = (this.choice.turn === 'x') ? 'o' : 'x';

        this.tileService.updateTurn(nextTurn).subscribe(() => {
          this.tileService.getUpdatedTurn().subscribe((data) => {
            this.choice.turn = data.turn;
            this.choice.turnLoading = false;
            console.log('updated tiles', this.choice.tiles);
          });
        });
      });
    });
  }

  // Check if a tile is present in the contentIndices array
  isTileInContentIndices(tileName: number): boolean {
    return this.choice.contentIndices.includes(tileName);
  }

  // Handle player's turn in the game against the computer
  playWithComputer(index: any) {
    const tile = this.choice.tiles[index];

    if (index == tile.name && !tile.clicked) {
      if (this.choice.turn === 'x') {
        tile.content = '../../assets/greenx.png';
        this.choice.turn = 'o';
      } else if (this.choice.turn === 'o') {
        tile.content = '../../assets/Oval.png';
        this.choice.turn = 'x';
      }
    } else {
      return; // Ignore click if the tile is already clicked or does not match the expected tile
    }

    tile.clicked = true;

    this.choice.checkWin();
    if (this.choice.winner === '') {
      this.choice.checkTie();
    }

    // Make the computer play if the game is still ongoing and the opponent is CPU
    if (this.choice.winner === '' && this.choice.opponent === 'CPU') {
      this.choice.computerPlay();
    } else {
      return;
    }
  }

  onHover(index: any) {
    if (!this.choice.tiles[index].clicked) {
      const tile = this.choice.tiles[index];

      if (this.choice.turn === 'x') {
        tile.content = '../../assets/x outline.png';
      } else if (this.choice.turn === 'o') {
        tile.content = '../../assets/o outline.png';
      }
    }
  }

  stopHover(index: any) {
    if (!this.choice.tiles[index].clicked) {
      this.choice.tiles[index].content = '';
    }
  }

  setRestartModal() {
    this.choice.showRestartModal = true;
  }
}
