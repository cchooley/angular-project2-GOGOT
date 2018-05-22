import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Character } from '../models/character';
import { Player } from '../models/player';
import { CHARACTERS } from '../models/characters';
import { SelectionService } from './selection.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HttpService {
  url = `https://www.anapioficeandfire.com/api/characters?name=${name}`

  charInfo: Subject<Character>
  playerInfo: Subject<Player>
  characters = CHARACTERS

  constructor(private _http: HttpClient) { }

  getChar(name): Observable<Array<Character>> {
    return this._http.get<Array<Character>>(`https://www.anapioficeandfire.com/api/characters?name=${name}`)
  }

}
