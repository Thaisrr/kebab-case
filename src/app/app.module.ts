import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { CardComponent } from './shared/card/card.component';
import { PresentationComponent } from './shared/presentation/presentation.component';
import { FormKebabComponent } from './modules/admin/pages/form-kebab/form-kebab.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DashboardKebabComponent } from './modules/admin/pages/dashboard-kebab/dashboard-kebab.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import {HttpClientModule} from "@angular/common/http";
import { DialogComponent } from './shared/ui/dialog/dialog.component';
import { OrderComponent } from './public/pages/order/order.component';
import { PanierComponent } from './public/pages/panier/panier.component';

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
    DialogComponent,
    OrderComponent,
    PanierComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
