import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ControllerService } from '../../services/controller.service';
import { ModelService } from '../../services/model.service';

@Component({
  selector: 'pr-app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainViewComponent implements OnInit {
  dayEvents$: Observable<DayHub>;
  constructor(model: ModelService, private controller: ControllerService) {
    this.dayEvents$ = model.dayEvents$;
  }

  ngOnInit(): void {}

  addClick($event: Date): void {
    this.controller.add($event);
  }

  editClick($event: DayModel): void {
    this.controller.edit($event);
  }

  deleteClick($event: DayModel): void {
    this.controller.delete($event);
  }

  changeDate($event: Date): void {
    this.controller.change($event);
  }
}
