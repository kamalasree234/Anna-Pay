import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { FormsModule } from '@angular/forms';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    AdminDashboard,
    AdminRoutingModule
  ]
})
export class AdminModule { }
