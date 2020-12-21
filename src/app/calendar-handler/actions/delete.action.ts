export class DeleteAction {
  static readonly type = '[Day] delete';
  constructor(public readonly item?: DayModel) {}
}
