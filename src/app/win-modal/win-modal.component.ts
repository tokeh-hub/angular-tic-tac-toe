import { Component, OnInit } from '@angular/core';
import { PlayerchoiceService } from '../playerchoice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-win-modal',
  templateUrl: './win-modal.component.html',
  styleUrls: ['./win-modal.component.css']
})
export class WinModalComponent implements OnInit {

  constructor(public choice:PlayerchoiceService, public router:Router) { }

  ngOnInit(): void {
  }

  quit(){
     this.choice.winner = ''
     this.choice.numberOfWinsX = 0
     this.choice.numberOfWinsO = 0
     this.choice.turn = 'x'
     this.choice.tiles.forEach(tile=>{
      tile.content = ''
      tile.clicked = false})
      this.choice.showHome = true
      this.choice.showBoard = false
      this.choice.content = ''

  }
  
  replay(){
    this.choice.tiles.forEach(tile=>{
      tile.content = ''
      tile.clicked = false})
      this.choice.winner = ''
      this.choice.content = ''
      if(this.choice.letter === 'o'){
        this.choice.turn = 'x'
        this.choice.computerPlay()
      }
      else{
           this.choice.turn = 'x'
      }
      // this.choice.turn = 'x'
      
   
  }
}
