import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { OrdersDashboardComponent } from './orders-dashboard/orders-dashboard.component';


@NgModule({
  declarations: [
    AdminComponent,
    OrdersDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
