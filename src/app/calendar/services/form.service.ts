import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private fb: FormBuilder) {}

  getForm(item: DayModel): FormGroup {
    return this.fb.group({
      id: [item?.id],
      date: [item?.date],
      name: [item?.name, [Validators.required, Validators.minLength(4)]],
      time: [this.getMoment(item?.time), [Validators.required]],
      type: [item?.type, [Validators.required, Validators.minLength(4)]],
      address: [item?.address, [Validators.required, Validators.minLength(4)]],
    });
  }

  getMoment(time: Date): any {
    if (time) {
      return moment(time);
    }
    return null;
  }
}
