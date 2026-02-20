import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayrollService } from './payroll-service/payroll-service';

const routes: Routes = [
  { path: 'create-payroll', component: PayrollService }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollRoutingModule { }
