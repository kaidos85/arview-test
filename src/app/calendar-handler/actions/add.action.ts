export class AddAction {
  static readonly type = '[Day] Add Action';
  constructor(public readonly item: DayModel) {}
}
