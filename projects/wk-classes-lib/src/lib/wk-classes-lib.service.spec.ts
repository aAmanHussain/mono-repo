import { TestBed } from '@angular/core/testing';

import { WkClassesLibService } from './wk-classes-lib.service';

describe('WkClassesLibService', () => {
  let service: WkClassesLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WkClassesLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
