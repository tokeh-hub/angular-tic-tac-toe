import { Component, OnInit } from '@angular/core';
import { PlayerchoiceService } from '../playerchoice.service';
import { TileService } from '../tile.service';
@Component({
  selector: 'app-win-modal',
  templateUrl: './win-modal.component.html',
  styleUrls: ['./win-modal.component.css']
})
export class WinModalComponent implements OnInit {

  constructor(public choice:PlayerchoiceService, public tileService:TileService){ }

  ngOnInit(): void {
  }

  quit(){
     this.choice.winner = ''
     this.choice.numberOfWinsX = 0
     this.choice.numberOfWinsO = 0
     this.choice.numberOfTies = 0
     
     if(this.choice.opponent === "CPU"){
      this.choice.turn = 'x'
      this.choice.tiles.forEach(tile=>{
        tile.content = ''
        tile.clicked = false})
    }
    if(this.choice.opponent === "Player"){
      // update turn in the backend and get the updated one
    this.tileService.resetTiles("win")
    this.tileService.updateTilesInterval()
    this.tileService.updateTurnInterval()
    }
      this.choice.showHome = true
      this.choice.showBoard = false
      this.choice.content = ''
      this.choice.contentIndices = []

  }
  
  replay() {
    if (this.choice.opponent === "CPU") {
      this.choice.tiles.forEach(tile => {
        tile.content = '';
        tile.clicked = false;
      });
    } else if (this.choice.opponent === "Player") {
      this.tileService.resetTiles("win");
      this.tileService.updateTilesInterval()
      this.tileService.updateTurnInterval()
    }  
    if (this.choice.opponent === "CPU") {
      this.choice.turn = 'x';
      
      if (this.choice.letter === 'o') {
        this.choice.computerPlay();
      }
    } else {
      this.choice.turn = 'x';
    }

    this.choice.winner = '';
    this.choice.content = '';
    this.choice.contentIndices = []
    
  }
  
}
