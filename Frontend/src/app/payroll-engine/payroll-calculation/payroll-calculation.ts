import { Component, Input, OnChanges } from '@angular/core';
import { pcsService } from '../../pcs';


@Component({
  selector: 'app-payroll-calculation',
  templateUrl: './payroll-calculation.html',
  styleUrls: ['./payroll-calculation.css']
})
export class PayrollCalculation implements OnChanges {

  @Input() employees: any[] = [];

  calculatedEmployees: any[] = [];

  constructor(private payrollService: pcsService) {}

  ngOnChanges() {
    if (this.employees && this.employees.length > 0) {
      this.processPayroll();
    }
  }

  processPayroll() {
    this.calculatedEmployees = this.employees.map(emp =>
      this.payrollService.calculatePayroll(emp)
    );
  }
}