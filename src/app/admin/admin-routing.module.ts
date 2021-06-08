import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ResultsComponent} from "./results/results.component";

const routes: Routes = [
  {
    path: 'resultados',
    component: ResultsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ], exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
