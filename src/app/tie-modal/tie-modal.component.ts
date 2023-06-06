import { Component, OnInit } from '@angular/core';
import { PlayerchoiceService } from '../playerchoice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tie-modal',
  templateUrl: './tie-modal.component.html',
  styleUrls: ['./tie-modal.component.css']
})
export class TieModalComponent implements OnInit {

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
     tile.clicked = false
     this.choice.turn = 'x'
     this.choice.winner = ''
     this.choice.tie = false
     this.choice.content = ''
   })
 }

}
