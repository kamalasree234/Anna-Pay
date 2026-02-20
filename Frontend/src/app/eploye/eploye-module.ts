import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EployeRoutingModule } from './eploye-routing-module';
import { EployeDashboard } from './eploye-dashboard/eploye-dashboard';



@NgModule({
  declarations: [
    EployeDashboard
  ],
  imports: [
    CommonModule,
  
    EployeRoutingModule
  ]
})
export class EployeModule { }
