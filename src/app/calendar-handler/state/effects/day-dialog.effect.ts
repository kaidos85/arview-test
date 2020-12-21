import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { AddDialogAction } from '../../actions/add-dialog.action';
import { DeleteDialogAction } from '../../actions/delete-dialog.action';
import { EditDialogAction } from '../../actions/edit-dialog.action';
import { DayDialogService } from '../../services/day-dialog.service';

@State<void>({
  name: 'dayDailgEffect',
})
@Injectable()
export class DayDialogEffect {
  constructor(private service: DayDialogService) {}
  @Action(AddDialogAction)
  add(ctx: StateContext<void>, { date }: AddDialogAction): void {
    this.service.add(date);
  }

  @Action(EditDialogAction)
  edit(ctx: StateContext<void>, { item }: EditDialogAction): void {
    this.service.edit(item);
  }

  @Action(DeleteDialogAction)
  delete(ctx: StateContext<void>, { item }: DeleteDialogAction): void {
    this.service.delete(item);
  }
}
