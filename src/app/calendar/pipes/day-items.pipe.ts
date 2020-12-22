import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'prDayItems',
})
export class DayItemsPipe implements PipeTransform {
  transform(dayHub: Observable<DayHub>): Observable<DayModel[]> {
    return dayHub.pipe(
      map((data) =>
        data.items.filter((c) => {
          const date = moment(c.date);
          const sDate = moment(data.selectDate);
          if (
            sDate.date() === date.date() &&
            sDate.month() === date.month() &&
            sDate.year() === date.year()
          ) {
            return true;
          }
          return false;
        })
      )
    );
  }
}
