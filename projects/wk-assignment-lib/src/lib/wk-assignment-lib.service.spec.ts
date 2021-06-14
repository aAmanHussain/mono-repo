import { TestBed } from '@angular/core/testing';

import { WkAssignmentLibService } from './wk-assignment-lib.service';

describe('WkAssignmentLibService', () => {
  let service: WkAssignmentLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WkAssignmentLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
