import { Component } from '@angular/core';
import { EmployeeService } from '../../employee';


@Component({
  selector: 'app-eploye-dashboard',
    standalone: false,
  templateUrl: './eploye-dashboard.html'
})
export class EployeDashboard {

  employee: any;
  netSalary: number = 0;

  constructor(private employeeService: EmployeeService) {
    this.employee = this.employeeService.getEmployee();
    this.netSalary = this.employeeService.calculateNetSalary();
  }
}