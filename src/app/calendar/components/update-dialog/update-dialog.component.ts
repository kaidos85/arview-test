import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import * as moment from 'moment';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'pr-app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss'],
})
export class UpdateDialogComponent implements OnInit {
  date: Date;
  item: DayModel;
  title: string;
  trySave = false;

  types = ['Встреча', 'День рождения'];

  constructor(
    private formService: FormService,
    protected dialogRef: NbDialogRef<any>,
    private cb: ChangeDetectorRef
  ) {}

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formService.getForm(this.item);
  }

  onSubmit(): void {
    this.trySave = true;
    const values = this.form.value;
    if (!values.id) {
      values['id'] = moment(new Date()).unix();
      values['date'] = moment(this.date).toDate();
    }
    if (values.time) {
      values.time = moment(values.time).toDate();
    }
    if (this.form.valid) {
      this.dialogRef.close(values);
    } else {
      this.cb.detectChanges();
    }
  }

  hasError(name: string): string {
    const control = this.form.get(name);
    if (control.invalid && this.trySave) {
      return 'red';
    }
    return '';
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
