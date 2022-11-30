import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { OrdersDashboardComponent } from './pages/orders-dashboard/orders-dashboard.component';
import {AdminKebabService} from "./services/admin.kebab.service";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    AdminComponent,
    OrdersDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  providers: [
    AdminKebabService
  ]
})
export class AdminModule { }
