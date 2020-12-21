import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pr-app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input()
  item: DayModel;
  @Output()
  editClick = new EventEmitter();
  @Output()
  deleteClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
