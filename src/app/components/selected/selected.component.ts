import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Character } from '../../models/character';
import { SelectionService } from '../../services/selection.service';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css']
})
export class SelectedComponent implements OnInit {
  @Input() characterSelect;
  @Input() user;
  @Input() date;
  @Input() pick;

  picks: Array<Character> = []

  constructor(
    private _selection: SelectionService
  ) { }

  ngOnInit(): void {
    this._selection.pickData.subscribe(newPick => {
      this.picks.unshift(newPick)
    })
  }
}
