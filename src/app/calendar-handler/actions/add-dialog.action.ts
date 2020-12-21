export class AddDialogAction {
  static readonly type = '[Day] add dialog';
  constructor(public readonly date: Date) {}
}
