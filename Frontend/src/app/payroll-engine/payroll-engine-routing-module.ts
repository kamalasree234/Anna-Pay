import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcelUpload } from './excel-upload/excel-upload';
import { ExcelParser } from './excel-parser/excel-parser';
import { PayrollCalculation } from './payroll-calculation/payroll-calculation';

const routes: Routes = [
  {path:"exup",component:ExcelUpload},
  {path:"exps",component:ExcelParser},
  {path:"prcl",component:PayrollCalculation}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollEngineRoutingModule { }
