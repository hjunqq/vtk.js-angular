import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DivVtkComponent } from './div-vtk/div-vtk.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { FullVtkComponent } from './full-vtk/full-vtk.component';

@NgModule({
  declarations: [
    AppComponent,
    DivVtkComponent,
    FullVtkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
