import { Injectable } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Store } from '@ngxs/store';
import { DeleteDialogComponent } from 'src/app/calendar/components/delete-dialog/delete-dialog.component';
import { UpdateDialogComponent } from 'src/app/calendar/components/update-dialog/update-dialog.component';
import { AddAction } from '../actions/add.action';
import { DeleteAction } from '../actions/delete.action';
import { EditAction } from '../actions/edit.action';

@Injectable({
  providedIn: 'root',
})
export class DayDialogService {
  constructor(private nbDialogService: NbDialogService, private store: Store) {}

  add(date: Date): void {
    const dialogRef = this.nbDialogService.open(UpdateDialogComponent, {
      context: {
        title: 'ADD',
        date,
      },
      closeOnBackdropClick: false,
    });
    dialogRef.onClose.subscribe((data) => {
      if (data) {
        this.store.dispatch(new AddAction(data));
      }
    });
  }
  edit(item: DayModel): void {
    const dialogRef = this.nbDialogService.open(UpdateDialogComponent, {
      context: {
        title: 'EDIT',
        item,
      },
      closeOnBackdropClick: false,
    });
    dialogRef.onClose.subscribe((data) => {
      if (data) {
        this.store.dispatch(new EditAction(data));
      }
    });
  }

  delete(item: DayModel): void {
    const dialogRef = this.nbDialogService.open(DeleteDialogComponent, {
      context: {
        title: 'Удалить событие?',
        item,
      },
      closeOnBackdropClick: false,
    });
    dialogRef.onClose.subscribe((data) => {
      if (data) {
        this.store.dispatch(new DeleteAction(data));
      }
    });
  }
}
