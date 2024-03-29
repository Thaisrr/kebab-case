import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogComponent} from "./ui/dialog/dialog.component";
import { AlertComponent } from './ui/alert/alert.component';



@NgModule({
  declarations: [
    DialogComponent,
    AlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DialogComponent

  ]
})
export class SharedModule { }
