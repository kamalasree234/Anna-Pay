import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayrollCalculationService {

  calculateSalary(employee: any): any {

    const role = employee.role;
    const experience = employee.experience || 0;

    let netSalary = 0;

    if (role === 'Professor') {
      netSalary = this.calculateProfessor(employee, experience);
    }
    else if (role === 'Administrative') {
      netSalary = this.calculateAdmin(employee);
    }
    else if (role === 'BlueCollar') {
      netSalary = this.calculateBlueCollar(employee);
    }

    return {
      ...employee,
      netSalary: netSalary
    };
  }

  // PROFESSOR STRUCTURE
  calculateProfessor(emp: any, experience: number): number {

    const basic = emp.basicPay;
    const gradePay = emp.gradePay;
    const DA = basic * 0.12;
    const HRA = basic * 0.20;
    const TA = 3000;

    const incrementSteps = Math.floor(experience / 2);
    const incrementAmount = incrementSteps * 2000;

    return basic + gradePay + DA + HRA + TA + incrementAmount;
  }

  // ADMIN STRUCTURE
  calculateAdmin(emp: any): number {

    const fixedCTC = emp.ctc;
    const allowance = fixedCTC * 0.10;

    return fixedCTC + allowance;
  }

  // BLUE COLLAR STRUCTURE
  calculateBlueCollar(emp: any): number {

    const dailyWage = emp.dailyWage;
    const daysWorked = emp.daysWorked;

    return dailyWage * daysWorked;
  }
}