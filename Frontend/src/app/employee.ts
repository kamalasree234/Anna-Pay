import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EmployeeService {

  employee = {
    id: 'EMP001',
    name: 'Ravi Kumar',
    basic: 50000,
    da: 5000,
    hra: 8000,
    tax: 4000,
    attendance: 26
  };

  getEmployee() {
    return this.employee;
  }

  calculateNetSalary() {
    return (
      this.employee.basic +
      this.employee.da +
      this.employee.hra -
      this.employee.tax
    );
  }
}