import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Character } from '../models/character';
import { Player } from '../models/player'

@Injectable()
export class InfoService {

  charData: Subject<Character>

  playerData: Subject<Player>

  constructor() {
    this.charData = new Subject();
    this.playerData = new Subject();
  }

  showChar(charInfo) {
    this.charData.next(charInfo)
  }

  addPlayer(playerInfo) {
    this.playerData.next(playerInfo)
  }

}
