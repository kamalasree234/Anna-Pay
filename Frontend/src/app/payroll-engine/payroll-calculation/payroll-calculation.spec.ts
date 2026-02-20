import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollCalculation } from './payroll-calculation';

describe('PayrollCalculation', () => {
  let component: PayrollCalculation;
  let fixture: ComponentFixture<PayrollCalculation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayrollCalculation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollCalculation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
