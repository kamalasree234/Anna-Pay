import { TestBed } from '@angular/core/testing';

import { PayrollCalculation } from './payroll-calculation';

describe('PayrollCalculation', () => {
  let service: PayrollCalculation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayrollCalculation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
