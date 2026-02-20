import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payroll-service',
  standalone: false,
  templateUrl: './payroll-service.html',
  styleUrl: './payroll-service.css',
})
export class PayrollService {
    payrollData = {
    employee_name: '',
    basic_salary: 0,
    bonus: 0
  };

  message: string = '';

  constructor(private payrollService: PayrollService) {}

  submitPayroll() {
    this.payrollService.createproll(this.payrollData)
      .subscribe({
        next: (res: any) => {
          this.message = "Payroll sent successfully!";
        },
        error: (err: any) => {
          this.message = "Error sending payroll!";
        }
      });
  }
  createproll(payrollData: { employee_name: string; basic_salary: number; bonus: number; }): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
