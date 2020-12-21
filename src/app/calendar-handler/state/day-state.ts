import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { patch, updateItem } from '@ngxs/store/operators';
import { AddAction } from '../actions/add.action';
import { DateChangeAction } from '../actions/day-change.action';
import { DeleteAction } from '../actions/delete.action';
import { EditAction } from '../actions/edit.action';

@State<DayHub>({
  name: 'dayModelState',
  defaults: {
    selectDate: new Date(),
    items: [],
  },
})
@Injectable()
export class DayState {
  @Action(AddAction)
  add(ctx: StateContext<DayHub>, { item }: AddAction): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: [...state.items, item],
    });
  }

  @Action(EditAction)
  edit(ctx: StateContext<DayHub>, { item }: EditAction): void {
    ctx.setState(
      patch({
        items: updateItem<DayModel>((i) => i.id === item.id, item),
      })
    );
  }

  @Action(DeleteAction)
  delete(ctx: StateContext<DayHub>, { item }: DeleteAction): void {
    const state = ctx.getState();
    const arr = state.items.filter((c) => c.id !== item.id);
    ctx.setState({
      ...state,
      items: arr,
    });
  }

  @Action(DateChangeAction)
  change(ctx: StateContext<DayHub>, { date }: DateChangeAction): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      selectDate: date,
    });
  }
}
