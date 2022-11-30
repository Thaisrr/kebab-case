import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/pages/home/home.component';
import { HeaderComponent } from './public/pages/home/header/header.component';
import { NotfoundComponent } from './public/pages/notfound/notfound.component';
import { CardComponent } from './public/pages/home/card/card.component';
import { PresentationComponent } from './public/pages/home/presentation/presentation.component';
import { FormKebabComponent } from './modules/admin/pages/form-kebab/form-kebab.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DashboardKebabComponent } from './modules/admin/pages/dashboard-kebab/dashboard-kebab.component';
import { NavigationComponent } from './public/components/navigation/navigation.component';
import {HttpClientModule} from "@angular/common/http";
import { OrderComponent } from './public/pages/order/order.component';
import { PanierComponent } from './public/pages/panier/panier.component';
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotfoundComponent,
    CardComponent,
    PresentationComponent,
    FormKebabComponent,
    DashboardKebabComponent,
    NavigationComponent,
    OrderComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
