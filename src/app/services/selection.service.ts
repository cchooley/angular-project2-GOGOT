import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Character } from '../models/character';


@Injectable()
export class SelectionService {

  pickData: Subject<Character>

  constructor() { 
    this.pickData = new Subject();
  }

  addData(submitData) {
    this.pickData.next(submitData);
  }
}
