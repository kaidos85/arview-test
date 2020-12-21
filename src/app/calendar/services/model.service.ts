import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DaySelectors } from 'src/app/calendar-handler/state/day.selectors';

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  @Select(DaySelectors.get)
  dayEvents$: Observable<DayHub>;

  constructor() {}
}
