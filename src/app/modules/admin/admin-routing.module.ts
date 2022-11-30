import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import {DashboardKebabComponent} from "./pages/dashboard-kebab/dashboard-kebab.component";
import {FormKebabComponent} from "./pages/form-kebab/form-kebab.component";

const routes: Routes = [
  { path: '', component: AdminComponent },
  {path: 'menus', component: DashboardKebabComponent},
  {path: 'new-menu', component: FormKebabComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
