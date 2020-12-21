export class DateChangeAction {
  static readonly type = '[Day] change';
  constructor(public readonly date: Date) {}
}
