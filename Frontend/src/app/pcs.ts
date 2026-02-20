import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class pcsService {

  constructor() {}

  // MAIN ENTRY METHOD
  calculatePayroll(employee: any): any {

    let salaryDetails: any = {};

    switch (employee.sheetType) {

      case 'Professors':
        salaryDetails = this.calculateProfessor(employee);
        break;

      case 'Administrative':
        salaryDetails = this.calculateAdministrative(employee);
        break;

      case 'BlueCollar':
        salaryDetails = this.calculateBlueCollar(employee);
        break;

      default:
        salaryDetails = {
          error: 'Unknown Role'
        };
    }

    return {
      ...employee,
      ...salaryDetails
    };
  }

  // ================================
  // PROFESSOR SALARY STRUCTURE
  // ================================
  calculateProfessor(emp: any): any {

    const basicPay = Number(emp.basicPay) || 0;
    const gradePay = Number(emp.gradePay) || 0;
    const experience = Number(emp.experience) || 0;

    const DA = basicPay * 0.12;   // 12%
    const HRA = basicPay * 0.20;  // 20%
    const TA = 3000;              // Fixed

    const increment = this.calculateIncrement(experience);
    const bonus = this.calculateBonus(experience);

    const grossSalary =
      basicPay +
      gradePay +
      DA +
      HRA +
      TA +
      increment +
      bonus;

    return {
      roleType: 'Professor',
      DA,
      HRA,
      TA,
      increment,
      bonus,
      netSalary: Math.round(grossSalary)
    };
  }

  // ================================
  // ADMINISTRATIVE STAFF STRUCTURE
  // ================================
  calculateAdministrative(emp: any): any {

    const ctc = Number(emp.ctc) || 0;
    const experience = Number(emp.experience) || 0;

    const allowance = ctc * 0.10;  // 10% variable
    const increment = this.calculateIncrement(experience);
    const bonus = this.calculateBonus(experience);

    const grossSalary =
      ctc +
      allowance +
      increment +
      bonus;

    return {
      roleType: 'Administrative',
      allowance,
      increment,
      bonus,
      netSalary: Math.round(grossSalary)
    };
  }

  // ================================
  // BLUE COLLAR STRUCTURE
  // ================================
  calculateBlueCollar(emp: any): any {

    const dailyWage = Number(emp.dailyWage) || 0;
    const daysWorked = Number(emp.daysWorked) || 0;
    const experience = Number(emp.experience) || 0;

    const wageAmount = dailyWage * daysWorked;
    const bonus = this.calculateBonus(experience);

    const grossSalary = wageAmount + bonus;

    return {
      roleType: 'BlueCollar',
      wageAmount,
      bonus,
      netSalary: Math.round(grossSalary)
    };
  }

  // ================================
  // EXPERIENCE INCREMENT LOGIC
  // Every 2 Years → ₹2000 Step-Up
  // ================================
  calculateIncrement(experience: number): number {

    const step = Math.floor(experience / 2);
    return step * 2000;
  }

  // ================================
  // BONUS TRIGGER LOGIC
  // Every 5 Years → ₹5000 Bonus
  // ================================
  calculateBonus(experience: number): number {

    if (experience > 0 && experience % 5 === 0) {
      return 5000;
    }

    return 0;
  }
}