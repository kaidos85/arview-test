import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { DayState } from './state/day-state';
import { DayDialogEffect } from './state/effects/day-dialog.effect';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgxsModule.forFeature([DayState, DayDialogEffect])],
})
export class CalendarHandlerModule {}
