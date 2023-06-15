import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, timer } from 'rxjs';
import { switchMap, takeWhile } from 'rxjs/operators';
import { Tile } from 'src/app/Tile';
import { PlayerchoiceService } from './playerchoice.service';

@Injectable({
  providedIn: 'root'
})
export class TileService {
  private apiUrl = 'https://tictactoe-mo1v.onrender.com/tiles';

  constructor(private http: HttpClient, public choice: PlayerchoiceService) { }

  getTiles(): Observable<Tile[]> {
    return this.http.get<Tile[]>(this.apiUrl);
  }

  updateTiles(tile: Tile): Observable<Tile> {
    const url = `${this.apiUrl}/${tile.id}`;
    return this.http.patch<Tile>(url, tile);
  }

  updateTurn(turn: string): Observable<Tile> {
    const url = `${this.apiUrl}/9`;
    const data = { turn: turn };
    return this.http.patch<Tile>(url, data);
  }

  getUpdatedTurn(): Observable<Tile> {
    return this.http.get<Tile>(`${this.apiUrl}/9`);
  }

  resetTiles(component: string) {
    this.choice.loading = component === 'board';
    this.getTiles().subscribe((tiles) => {
      this.choice.tiles = tiles;
      this.updateTurn('x').subscribe(() => {
        this.getUpdatedTurn().subscribe((data) => {
          this.choice.turn = data.turn;
          const updateTileObservables: Observable<Tile>[] = [];
          this.choice.tiles.forEach((tile) => {
            if (tile.name === 0 || tile.name <= 8) {
              tile.content = '';
              tile.clicked = false;
              tile.turn = 'x';
            } else {
              tile.content = 'mg';
              tile.turn = 'x';
            }
            updateTileObservables.push(this.updateTiles(tile));
          });
          forkJoin(updateTileObservables).subscribe(() => {
            this.getTiles().subscribe((tiles) => {
              this.choice.tiles = tiles;
              if (this.choice.loading) {
                this.choice.loading = false;
              }
            });
          });
        });
      });
    });
  }

  updateTilesInterval() {
    // Call the function initially
    this.getTiles().subscribe((tiles) => {
      this.choice.tiles = tiles;
    });

    // Call the function at regular intervals until there is a winner or tie
    timer(2000, 2000)
      .pipe(
        switchMap(() => this.getTiles()),
        takeWhile(() => this.choice.winner === '' && !this.choice.isTie) // Stop the interval if there is a winner or tie
      )
      .subscribe((tiles) => {
        this.choice.tiles = tiles;
        this.choice.checkWin();
        if (this.choice.winner === '') {
          this.choice.checkTie();
        }
        console.log('my winner', this.choice.winner);
      });
  }

  updateTurnInterval() {
    // Call the function initially
    this.getUpdatedTurn().subscribe((tile) => {
      this.choice.turn = tile.turn;
    });

    // Call the function at regular intervals until there is a winner or tie
    timer(2000, 2000)
      .pipe(
        switchMap(() => this.getUpdatedTurn()),
        takeWhile(() => this.choice.winner === '' && !this.choice.isTie) // Stop the interval if there is a winner or tie
      )
      .subscribe((tile) => {
        this.choice.turn = tile.turn;
      });
  }
}
