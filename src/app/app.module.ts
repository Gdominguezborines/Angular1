import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tarea1Component } from './tarea1/tarea1.component';
import { CalcComponent } from './calc/calc.component';
import { TresEnRayaComponent } from './tres-en-raya/tres-en-raya.component';

@NgModule({
  declarations: [
    AppComponent,
    Tarea1Component,
    CalcComponent,
    TresEnRayaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
