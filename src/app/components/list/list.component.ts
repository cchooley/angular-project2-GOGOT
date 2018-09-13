import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../services/http.service';
import { SelectionService } from '../../services/selection.service';

import { Character } from '../../models/character';
import { PLAYERS } from '../../models/players';
import { Player } from '../../models/player';
import { CHARACTERS } from '../../models/characters';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  characters = CHARACTERS
  players = PLAYERS

  character: Character
  player: Player

  selectedChar: Array<Character>
  availChar: Array<Character> = []
  charData: Array<Character> = []

  clear: Boolean

  model: Character = {
    pickedBy: '',
    name: '',
    gender: '',
    born: '',
    titles: [],
    aliases: [],
    playedBy: '',
    timesPicked: 0,
    pickedAt: Date().toString()
  }

  constructor(
    private _httpService: HttpService,
    private _selectionService: SelectionService,
    private _infoService: InfoService
  ) { }

  ngOnInit() { 
    this._httpService.test().subscribe(characters => {
      console.log(characters)
    })
  }

  displayChar(event: any) {
    this._infoService.showChar(event.target.value)
    this.availChar = this.filterChar(this.characters, event.target.value)
    this._httpService.getChar(event.target.value).subscribe(thisChar => {
      this.selectedChar = thisChar;
      this.merge(this.selectedChar, this.availChar)
    })
  }

  postPick(player) {
    this.model.timesPicked = this.availChar[0].timesPicked++
    this._selectionService.addData(this.model)
    this.model = {
      pickedBy: '',
      name: '',
      gender: '',
      born: '',
      titles: [],
      aliases: [],
      playedBy: '',
      timesPicked: this.model.timesPicked ++,
      pickedAt: new Date().toString()
    }

  }

  filterChar(arr, name) {
    return arr.filter(x => {
      return x.name === name
    })
  }

  addPick() {
    this.character.timesPicked +1
  }

  merge(data1, data2) {
    let obj1 = {}
    let obj2 = {}
    for (let i = 0; i < data1.length; i++) {
      let obj1 = data1[i]
      for (let j = 0; j < data2.length; j++) {
        let obj2 = data2[j]
        this.charData.shift()
        this.charData.push({ ...obj1, ...obj2 })
      }

    }

  }
}
