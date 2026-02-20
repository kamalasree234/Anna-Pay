import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EployeDashboard } from './eploye-dashboard';

describe('EployeDashboard', () => {
  let component: EployeDashboard;
  let fixture: ComponentFixture<EployeDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EployeDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EployeDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
