import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WkLandingLibComponent } from './wk-landing-lib.component';

describe('WkLandingLibComponent', () => {
  let component: WkLandingLibComponent;
  let fixture: ComponentFixture<WkLandingLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WkLandingLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WkLandingLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
