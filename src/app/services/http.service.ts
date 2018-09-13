import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Character } from '../models/character';
import { Player } from '../models/player';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HttpService {
  url = `https://www.anapioficeandfire.com/api/characters?name=${name}`
  charUrl = `https://gogot-server.herokuapp.com/characters`
  playerUrl = `https://gogot-server.herokuapp.com/players`

  charInfo: Subject<Character>
  playerInfo: Subject<Player>

  constructor(private _http: HttpClient) { }

  getChar(name): Observable<Array<Character>> {
    return this._http.get<Array<Character>>(`https://www.anapioficeandfire.com/api/characters?name=${name}`)
  }

  test(): Observable<Array<Character>> {
    console.log(this.playerUrl)
    return this._http.get<Array<Character>>(this.playerUrl)
  }
}
