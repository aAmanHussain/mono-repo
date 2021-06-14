import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WkAssignmentLibComponent } from './wk-assignment-lib.component';

describe('WkAssignmentLibComponent', () => {
  let component: WkAssignmentLibComponent;
  let fixture: ComponentFixture<WkAssignmentLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WkAssignmentLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WkAssignmentLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
