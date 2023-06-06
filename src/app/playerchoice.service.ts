import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PlayerchoiceService {
  opponent: string = '';
  letter: string = 'x';
  winner = ''
  turn = 'x'
  showRestartModal = false
  numberOfWinsX: number = 0
  numberOfWinsO: number = 0
  numberOfTies: number = 0
  modalHead: string = ''
  showHome: boolean = true
  showBoard: boolean = false
  tie: boolean = false
  content: string = ''

  constructor() { }


  tiles = [
    {name:0,id:0,content:'',clicked:false},
    {name:1,id:1,content:'',clicked:false},
    {name:2,id:2,content:'',clicked:false},
    {name:3,id:3,content:'',clicked:false},
    {name:4,id:4,content:'',clicked:false},
    {name:5,id:5,content:'',clicked:false},
    {name:6,id:6,content:'',clicked:false},
    {name:7,id:7,content:'',clicked:false},
    {name:8,id:8,content:'',clicked:false},
  ]

  computerPlay() {
    var availableTiles = this.tiles.filter(tile => !tile.clicked);
    var randomIndex = this.getRandomNumber(availableTiles);
    console.log('random index',randomIndex)
    if(availableTiles.length === 0){
      console.log('empty')
      // this.checkTie()
      // this.checkWin()
      return;
    }
    if (this.letter === 'x') {
      if (this.turn === 'o') {
        var randomTile = availableTiles[randomIndex];
        console.log('available tiles',availableTiles)
        console.log('random tile',randomTile)
        randomTile.content = '../../assets/Oval.png';
        randomTile.clicked = true;
        this.turn = 'x';
      } else if (this.turn === 'x') {
        var randomTile = availableTiles[randomIndex];
        console.log('available tiles',availableTiles)
        console.log('random tile',randomTile)
        randomTile.content = '../../assets/greenx.png';
        randomTile.clicked = true;
        this.turn = 'o';
      }
    }
    if (this.letter === 'o') {
      if (this.turn === 'o') {
        var randomTile = availableTiles[randomIndex];
        console.log('available tiles',availableTiles)
        console.log('random tile',randomTile)
        randomTile.content = '../../assets/Oval.png';
        randomTile.clicked = true;
        this.turn = 'x';
      } else if (this.turn === 'x') {
        var randomTile = availableTiles[randomIndex];
        console.log('available tiles',availableTiles)
        console.log('random tile',randomTile)
        randomTile.content = '../../assets/greenx.png';
        randomTile.clicked = true;
        this.turn = 'o';
      }
    }
    if(this.content === ''){
      this.checkWin()
      if (this.winner === '') {
        this.checkTie();
      }
      else return;
    }
    else return;
    
  }

  getRandomNumber(arr:any){
    return Math.floor(Math.random() * arr.length);
  }

  checkWin(){
    if(this.tiles[0].content ===  this.tiles[1].content &&  this.tiles[0].content === this.tiles[2].content && this.tiles[0].content != ''){this.content = this.tiles[0].content}
    if(this.tiles[3].content ===  this.tiles[4].content &&  this.tiles[3].content === this.tiles[5].content && this.tiles[3].content != '') {this.content = this.tiles[3].content}
    if(this.tiles[6].content ===  this.tiles[7].content &&  this.tiles[6].content === this.tiles[8].content && this.tiles[6].content != ''){this.content = this.tiles[6].content}
    if(this.tiles[0].content ===  this.tiles[3].content &&  this.tiles[0].content === this.tiles[6].content && this.tiles[0].content != ''){this.content = this.tiles[0].content}
    if(this.tiles[1].content ===  this.tiles[4].content &&  this.tiles[1].content === this.tiles[7].content && this.tiles[1].content != ''){this.content = this.tiles[1].content}
    if(this.tiles[0].content ===  this.tiles[4].content &&  this.tiles[0].content === this.tiles[8].content && this.tiles[0].content != ''){this.content = this.tiles[0].content}
    if(this.tiles[2].content ===  this.tiles[5].content &&  this.tiles[2].content === this.tiles[8].content && this.tiles[2].content != ''){this.content = this.tiles[2].content}
    if(this.tiles[6].content ===  this.tiles[4].content &&  this.tiles[6].content === this.tiles[2].content && this.tiles[6].content != ''){this.content = this.tiles[6].content}
    
       if(this.content === '../../assets/greenx.png'){
        if(this.letter === 'o'){
          this.modalHead = 'You Lost!'
          console.log('be like x win')
        }
        else{
          this.modalHead = 'You won'
        }
        this.winner = 'x';
        this.numberOfWinsX +=1
      }

       if (this.content === '../../assets/Oval.png'){
        console.log('letter',this.letter)
        if(this.letter === 'x'){
          this.modalHead = 'You Lost!'
        }
        else{
          this.modalHead = 'You Won'
        }
        this.winner = 'o';
        // this.disable = true;
        this.numberOfWinsO +=1
      }
    
  }

  checkTie(){
    console.log(this.winner)
    if (!this.tiles.some(tile => tile.content === '') && this.winner === '') {
      this.tie = true
      this.numberOfTies+=1 // Not a tie, there are empty cells remaining
    }
    else{
      this.tie = false
    }
  }

}
