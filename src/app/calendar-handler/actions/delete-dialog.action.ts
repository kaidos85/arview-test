export class DeleteDialogAction {
  static readonly type = '[Day] delete dialog';
  constructor(public readonly item?: DayModel) {}
}
