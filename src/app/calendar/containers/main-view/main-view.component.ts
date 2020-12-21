import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddDialogAction } from 'src/app/calendar-handler/actions/add-dialog.action';
import { DateChangeAction } from 'src/app/calendar-handler/actions/day-change.action';
import { DeleteDialogAction } from 'src/app/calendar-handler/actions/delete-dialog.action';
import { EditDialogAction } from 'src/app/calendar-handler/actions/edit-dialog.action';
import { ControllerService } from '../../services/controller.service';
import { ModelService } from '../../services/model.service';

@Component({
  selector: 'pr-app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  dayEvents$: Observable<DayHub>;
  constructor(
    model: ModelService,
    private controller: ControllerService,
    private store: Store
  ) {
    this.dayEvents$ = model.dayEvents$;
  }

  ngOnInit(): void {}

  addClick($event: any): void {
    this.store.dispatch(new AddDialogAction($event._d));
  }

  editClick($event: DayModel): void {
    this.store.dispatch(new EditDialogAction($event));
  }

  deleteClick($event: DayModel): void {
    this.store.dispatch(new DeleteDialogAction($event));
  }

  changeDate($event: any): void {
    this.store.dispatch(new DateChangeAction($event.toDate()));
  }
}
