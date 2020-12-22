import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'pr-app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss'],
})
export class MainListComponent implements OnInit {
  @Input()
  dayEvents: DayModel[];
  @Output()
  addClick = new EventEmitter();
  @Output()
  editClick = new EventEmitter();
  @Output()
  deleteClick = new EventEmitter();
  @Output()
  changeClick = new EventEmitter();

  date = moment(new Date());

  constructor() {}

  ngOnInit(): void {
    this.changeClick.emit(this.date.utc(true).toDate());
  }

  add(): void {
    this.addClick.emit(this.date.utc(true).toDate());
  }

  edit($event: DayModel): void {
    this.editClick.emit($event);
  }

  delete($event: DayModel): void {
    this.deleteClick.emit($event);
  }

  change(): void {
    this.changeClick.emit(this.date.utc(true).toDate());
  }
}
