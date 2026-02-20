import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EployeDashboard } from './eploye-dashboard/eploye-dashboard';

const routes: Routes = [
  {path:"elll",component:EployeDashboard}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EployeRoutingModule { }
