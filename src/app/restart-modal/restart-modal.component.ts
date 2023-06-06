import { Component, OnInit } from '@angular/core';
import { PlayerchoiceService } from '../playerchoice.service';
@Component({
  selector: 'app-restart-modal',
  templateUrl: './restart-modal.component.html',
  styleUrls: ['./restart-modal.component.css']
})
export class RestartModalComponent implements OnInit {

  constructor(public choice:PlayerchoiceService) { }

  ngOnInit(): void {

  }
  

  reset(){
    this.choice.tiles.forEach(tile=>{
      tile.content = ''
      tile.clicked = false
    })
   
    this.choice.numberOfWinsO = 0
    this.choice.numberOfWinsX = 0
    this.choice.numberOfTies = 0
    this.choice.showRestartModal  = false
    this.choice.content = ''
    if(this.choice.letter === 'o'){
      this.choice.turn = 'x'
      this.choice.computerPlay()
    }
    else{
         this.choice.turn = 'x'
    }
   
  }

  cancel(){
    this.choice.showRestartModal  = false
    this.choice.content = ''
  }
}
