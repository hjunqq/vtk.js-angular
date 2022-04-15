import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DivVtkComponent} from "./div-vtk/div-vtk.component";
import {FullVtkComponent} from "./full-vtk/full-vtk.component";


const routes: Routes = [
  {path: 'div-vtk', component: DivVtkComponent},
  {path: 'full-vtk', component: FullVtkComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
