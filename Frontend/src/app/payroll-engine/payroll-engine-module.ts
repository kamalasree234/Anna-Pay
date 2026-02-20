import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollEngineRoutingModule } from './payroll-engine-routing-module';
import { ExcelUpload } from './excel-upload/excel-upload';
import { ExcelParser } from './excel-parser/excel-parser';
import { PayrollCalculation } from './payroll-calculation/payroll-calculation';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExcelUpload,
    ExcelParser,
    PayrollCalculation
  ],
  imports: [
    CommonModule,
    FormsModule,
    PayrollEngineRoutingModule
  ]
})
export class PayrollEngineModule { }
