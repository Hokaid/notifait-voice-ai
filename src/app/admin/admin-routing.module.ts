import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ResultsComponent} from "./results/results.component";
import {GraphsComponent} from "./graphs/graphs.component";
import {UsersComponent} from "./users/users.component";

const routes: Routes = [
  {
    path: 'results',
    component: ResultsComponent
  },
  {
    path: 'graphs',
    component: GraphsComponent
  },
  {
    path: 'main',
    component: UsersComponent
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
