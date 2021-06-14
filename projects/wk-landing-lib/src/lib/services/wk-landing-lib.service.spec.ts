import { TestBed } from '@angular/core/testing';

import { WkLandingLibService } from './wk-landing-lib.service';

describe('WkLandingLibService', () => {
  let service: WkLandingLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WkLandingLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
