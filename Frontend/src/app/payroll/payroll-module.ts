import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollRoutingModule } from './payroll-routing-module';
import { PayrollService } from './payroll-service/payroll-service';


@NgModule({
  declarations: [
    PayrollService
  ],
  imports: [
    CommonModule,
    PayrollRoutingModule
  ]
})
export class PayrollModule { }
