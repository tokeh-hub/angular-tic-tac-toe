import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Tile } from 'src/Tile';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class TileService {
  private apiUrl = 'https://tictactoe-mo1v.onrender.com/tiles'

  constructor(private http:HttpClient) { }

  getTiles(): Observable<Tile[]>{
    return this.http.get<Tile[]>(this.apiUrl)
  }

  updateTiles(tile:Tile):Observable<Tile>{
    const url = `${this.apiUrl}/${tile.id}`
    return this.http.patch<Tile>(url,tile)
  }
}
