import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbActionsModule,
  NbButtonModule,
  NbCalendarModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbSelectModule,
  NbTimepickerModule,
} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CalendarHandlerModule } from '../calendar-handler/calendar-handler.module';
import { UpdateDialogComponent } from './components/update-dialog/update-dialog.component';
import { MainListComponent } from './components/main-list/main-list.component';
import { MainViewComponent } from './containers/main-view/main-view.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { DayItemsPipe } from './pipes/day-items.pipe';
import { ListItemComponent } from './components/list-item/list-item.component';

@NgModule({
  declarations: [
    UpdateDialogComponent,
    MainListComponent,
    MainViewComponent,
    DeleteDialogComponent,
    DayItemsPipe,
    ListItemComponent,
  ],
  imports: [
    CommonModule,
    NbCalendarModule,
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbActionsModule,
    NbIconModule,
    NbListModule,
    NbLayoutModule,
    NbTimepickerModule,
    CalendarHandlerModule,
  ],
})
export class CalendarModule {}
