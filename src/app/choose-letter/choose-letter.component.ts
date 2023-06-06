import { Component, OnInit } from '@angular/core';
import { PlayerchoiceService } from '../playerchoice.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-choose-letter',
  templateUrl: './choose-letter.component.html',
  styleUrls: ['./choose-letter.component.css']
})
export class ChooseLetterComponent implements OnInit {
  letter = ''
  constructor(public choice:PlayerchoiceService, private router:Router) { }

  ngOnInit(): void {
  }

  chooseLetter(letter:string){
    if(letter === 'x'){
      this.choice.letter = 'x' 
      // this.letter = 'x'
    }
    else{
      this.choice.letter = 'o'
    }
  }

  updatePlayers(choice:string){
      if(choice === 'CPU'){
        this.choice.opponent = 'CPU' 
      }
      else{
        this.choice.opponent = 'Player'
      }
      this.choice.showBoard = true
      this.choice.showHome = false
  }

  


}
