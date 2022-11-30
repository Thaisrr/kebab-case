import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {NotfoundComponent} from "./public/pages/notfound/notfound.component";
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
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
