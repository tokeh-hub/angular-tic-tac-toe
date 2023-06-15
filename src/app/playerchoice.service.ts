import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerchoiceService {
  opponent: string = '';
  isTie: boolean = false;
  letter: string = '';
  letterError: string = '';
  networkError: string = '';
  loading = false;
  turnLoading = false;
  winner = '';
  turn = 'x';
  showRestartModal = false;
  numberOfWinsX: number = 0;
  numberOfWinsO: number = 0;
  numberOfTies: number = 0;
  modalHead: string = '';
  showHome: boolean = true;
  showBoard: boolean = false;
  tie: boolean = false;
  content: string = '';
  contentIndices: number[] = [];

  tiles = [
    { name: 0, id: 0, content: '', clicked: false, turn: 'x' },
    { name: 1, id: 1, content: '', clicked: false, turn: 'x' },
    { name: 2, id: 2, content: '', clicked: false, turn: 'x' },
    { name: 3, id: 3, content: '', clicked: false, turn: 'x' },
    { name: 4, id: 4, content: '', clicked: false, turn: 'x' },
    { name: 5, id: 5, content: '', clicked: false, turn: 'x' },
    { name: 6, id: 6, content: '', clicked: false, turn: 'x' },
    { name: 7, id: 7, content: '', clicked: false, turn: 'x' },
    { name: 8, id: 8, content: '', clicked: false, turn: 'x' },
  ];

  computerPlay() {
    const availableTiles = this.tiles.filter(tile => !tile.clicked);
    const randomIndex = this.getRandomNumber(availableTiles);
    
    if (availableTiles.length === 0) {
      // No available tiles left, handle tie or win condition
      this.checkTie();
      this.checkWin();
      return;
    }

    if (this.letter === 'x') {
      if (this.turn === 'o') {
        const randomTile = availableTiles[randomIndex];
        randomTile.content = '../../assets/Oval.png';
        randomTile.clicked = true;
        this.turn = 'x';
      } else {
        return;
      }
    }

    if (this.letter === 'o') {
      if (this.turn === 'x') {
        const randomTile = availableTiles[randomIndex];
        randomTile.content = '../../assets/greenx.png';
        randomTile.clicked = true;
        this.turn = 'o';
      } else {
        return;
      }
    }

    if (this.content === '') {
      // Check for win or tie condition
      this.checkWin();
      if (this.winner === '') {
        this.checkTie();
      }
    }
  }

  getRandomNumber(arr: any[]): number {
    return Math.floor(Math.random() * arr.length);
  }

  checkWin() {
    const winConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [6, 4, 2] // Diagonals
    ];

    for (const condition of winConditions) {
      const [a, b, c] = condition;
      if (this.tiles[a].content === this.tiles[b].content && this.tiles[a].content === this.tiles[c].content && this.tiles[a].content !== '') {
        this.content = this.tiles[a].content;
        this.contentIndices = [a, b, c];
        break;
      }
    }

    if (this.content === '../../assets/greenx.png') {
      if (this.letter === 'o') {
        this.modalHead = 'You Lost!';
      } else {
        this.modalHead = 'You won';
      }
      this.winner = 'x';
      this.numberOfWinsX += 1;
    }

    if (this.content === '../../assets/Oval.png') {
      if (this.letter === 'x') {
        this.modalHead = 'You Lost!';
      } else {
        this.modalHead = 'You Won';
      }
      this.winner = 'o';
      this.numberOfWinsO += 1;
    }
  }

  checkTie() {
    if (this.tiles.filter(tile => tile.name >= 0 && tile.name <= 8).every(tile => tile.content !== '')) {
      this.tie = true;
      this.isTie = true;
      this.numberOfTies += 1;
    } else {
      this.tie = false;
    }
  }
}
