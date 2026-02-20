import { Component } from '@angular/core';
import { PaymentService } from '../../payment';
import { EmployeeService } from '../../employee';

declare var Razorpay: any;

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.html'
})
export class AdminDashboard {

  employee: any;
  netSalary: number = 0;
  paymentStatus: string = '';

  constructor(
    private paymentService: PaymentService,
    private employeeService: EmployeeService
  ) {
    this.employee = this.employeeService.getEmployee();
    this.netSalary = this.employeeService.calculateNetSalary();
  }

  paySalary() {
    this.paymentService
      .createOrder(this.employee.id, this.netSalary)
      .subscribe((order: any) => {

        const options = {
          key: 'YOUR_RAZORPAY_KEY',
          amount: order.amount,
          currency: 'INR',
          name: 'AnnaPay Payroll',
          description: 'Salary Payment',
          order_id: order.id,
          handler: (response: any) => {
            this.paymentStatus = 'Payment Successful';
            this.paymentService.verifyPayment(response).subscribe();
          }
        };

        const rzp = new Razorpay(options);
        rzp.open();
      });
  }
}