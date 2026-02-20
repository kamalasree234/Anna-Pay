import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayrollService } from './payroll/payroll-service/payroll-service';
import { AdminDashboard } from './admin/admin-dashboard/admin-dashboard';
import { PayrollCalculation } from './payroll-engine/payroll-calculation/payroll-calculation';
import { ExcelParser } from './payroll-engine/excel-parser/excel-parser';
import { ExcelUpload } from './payroll-engine/excel-upload/excel-upload';
import { NotificationPanel } from './modification/notification-panel/notification-panel';
import { EployeDashboard } from './eploye/eploye-dashboard/eploye-dashboard';


const routes: Routes = [
  { path: 'create-payroll', component: PayrollService },
  {path:"adb",component:AdminDashboard},
   {path:"exup",component:ExcelUpload},
    {path:"exps",component:ExcelParser},
    {path:"prcl",component:PayrollCalculation},
      {path:"prm",component:NotificationPanel},
       {path:"elll",component:EployeDashboard}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
