export class EditDialogAction {
  static readonly type = '[Day] edit dialog';
  constructor(public readonly item?: DayModel) {}
}
