export class EditAction {
  static readonly type = '[Day] edit';
  constructor(public readonly item?: DayModel) {}
}
