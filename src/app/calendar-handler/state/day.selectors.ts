import { Selector } from '@ngxs/store';
import { DayState } from './day-state';

export class DaySelectors {
  @Selector([DayState])
  static get(state: DayHub): DayHub {
    return state;
  }
}
