import { TestBed } from '@angular/core/testing';

import { DayDialogService } from './day-dialog.service';

describe('DayDialogServiceService', () => {
  let service: DayDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
