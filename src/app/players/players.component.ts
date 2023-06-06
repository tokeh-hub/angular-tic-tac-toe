import { Component, OnInit, Input } from '@angular/core';
import { PlayerchoiceService } from '../playerchoice.service';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

export class PlayersComponent implements OnInit {
  @Input() player1: string = ''
  @Input() player2: string = ''
  @Input() letter1: string = 'X'
  @Input() letter2: string = 'O'

  constructor(public choice:PlayerchoiceService) { }

  ngOnInit(): void {
    if(this.choice.opponent === 'CPU'){
      this.player1 = '(YOU)'
      this.player2 = '(CPU)'
    }
    else if(this.choice.opponent === 'Player'){
      this.player1 = '(P1)'
      this.player2 = '(P2)'
    }

    if(this.choice.letter === 'x'){
      this.letter1 = 'X'
      this.letter2 = 'O'
    }
    else if(this.choice.letter === 'o'){
      this.letter1 = 'O'
      this.letter2 = 'X'
    }
    
    else return
  }
  


}
