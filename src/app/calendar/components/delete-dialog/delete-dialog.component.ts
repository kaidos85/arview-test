import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'pr-app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent implements OnInit {
  item: DayModel;
  title: string;
  constructor(private dialogRef: NbDialogRef<any>) {}

  ngOnInit(): void {}

  delete(): void {
    this.dialogRef.close(this.item);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
