import { Component, OnInit } from '@angular/core';
import { PlayerchoiceService } from '../playerchoice.service';
import { TileService } from '../tile.service';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  disable = false  
  constructor(public choice:PlayerchoiceService,public tileService: TileService) { }

  ngOnInit(): void {
    if(this.choice.opponent === "Player"){
      this.tileService.getTiles().subscribe((tiles)=>{
        console.log('tiles',tiles)
        this.choice.tiles = tiles
      })
    }
    if(this.choice.letter === 'o'){
          if(this.choice.opponent === "CPU"){
            this.choice.computerPlay()
          }
          else return
    }
  }

  handleClick(index:any){
         if(this.choice.opponent === "CPU"){
          this.playWithComputer(index)
         }
         else(this.playWithPlayer(index))
  }


  playWithPlayer(index:any){
      var tile = this.choice.tiles[index]
      if(this.choice.turn === 'x'){
        tile.content = '../../assets/greenx.png'
        tile.clicked = true
        this.tileService.updateTiles(tile).subscribe()
        this.choice.turn = 'o'
      }
      else if(this.choice.turn === 'o'){
        tile.content = '../../assets/Oval.png'
        tile.clicked = true
        this.tileService.updateTiles(tile).subscribe()
        this.choice.turn = 'x'
      }
      else return;

      this.choice.checkWin()
      if (this.choice.winner === '') {
        this.choice.checkTie();
      }
      
  }

 
  playWithComputer(index:any){
     this.choice.tiles.forEach((tile)=>{
      if(index == tile.name && !tile.clicked){
        console.log(tile.name)
        if(this.choice.turn === 'x'){
          tile.content = '../../assets/greenx.png'
          tile.clicked = true
          this.choice.turn = 'o'
        }
        else if(this.choice.turn === 'o'){
          tile.content = '../../assets/Oval.png'
          tile.clicked = true
          this.choice.turn = 'x'
        }
      }
      else return
      this.choice.checkWin()
      if (this.choice.winner === '') {
        this.choice.checkTie();
      }
     })
     console.log(this.choice.tiles)
    if(this.choice.winner === ''){
      this.choice.computerPlay()
    }
    else return;
    
  }

  onHover(index:any){
    if(!this.choice.tiles[index].clicked){
      this.choice.tiles.forEach((tile)=>{
        if(index == tile.name){
          if(this.choice.turn === 'x'){
            tile.content = '../../assets/x outline.png'
          }
          else if(this.choice.turn === 'o'){
            tile.content = '../../assets/o outline.png'
          }
          
        }
        else return
       })
    }
  }

  stopHover(index:any){
    if (!this.choice.tiles[index].clicked) {
      this.choice.tiles[index].content = '';
    }
  }

  setRestartModal(){
    this.choice.showRestartModal  = true
  }

 
  

}
