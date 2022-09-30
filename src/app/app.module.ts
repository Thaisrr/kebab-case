import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { CardComponent } from './components/card/card.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { FormKebabComponent } from './pages/form-kebab/form-kebab.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DashboardKebabComponent } from './pages/dashboard-kebab/dashboard-kebab.component';
import { NavigationComponent } from './components/navigation/navigation.component';

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
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
