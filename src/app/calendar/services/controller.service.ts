import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddDialogAction } from 'src/app/calendar-handler/actions/add-dialog.action';
import { DateChangeAction } from 'src/app/calendar-handler/actions/day-change.action';
import { DeleteDialogAction } from 'src/app/calendar-handler/actions/delete-dialog.action';
import { EditDialogAction } from 'src/app/calendar-handler/actions/edit-dialog.action';

@Injectable({
  providedIn: 'root',
})
export class ControllerService {
  constructor(private store: Store) {}

  add(item: Date): void {
    this.store.dispatch(new AddDialogAction(item));
  }

  edit(item: DayModel): void {
    this.store.dispatch(new EditDialogAction(item));
  }

  delete(item: DayModel): void {
    this.store.dispatch(new DeleteDialogAction(item));
  }

  change(date: Date): void {
    this.store.dispatch(new DateChangeAction(date));
  }
}
