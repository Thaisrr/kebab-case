import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {NotfoundComponent} from "./pages/notfound/notfound.component";
import {FormKebabComponent} from "./modules/admin/pages/form-kebab/form-kebab.component";
import {DashboardKebabComponent} from "./modules/admin/pages/dashboard-kebab/dashboard-kebab.component";
import {OrderComponent} from "./public/pages/order/order.component";
import {PanierComponent} from "./public/pages/panier/panier.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'order/:id', component: OrderComponent},
  {path: 'panier', component: PanierComponent},
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
