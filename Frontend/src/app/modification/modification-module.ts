import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificationRoutingModule } from './modification-routing-module';
import { NotificationPanel } from './notification-panel/notification-panel';


@NgModule({
  declarations: [
    NotificationPanel
  ],
  imports: [
    CommonModule,
    ModificationRoutingModule
  ]
})
export class ModificationModule { }
