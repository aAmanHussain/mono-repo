import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WkClassesLibComponent } from './wk-classes-lib.component';

describe('WkClassesLibComponent', () => {
  let component: WkClassesLibComponent;
  let fixture: ComponentFixture<WkClassesLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WkClassesLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WkClassesLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
