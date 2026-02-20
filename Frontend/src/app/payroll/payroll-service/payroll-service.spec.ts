import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollService } from './payroll-service';

describe('PayrollService', () => {
  let component: PayrollService;
  let fixture: ComponentFixture<PayrollService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayrollService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
