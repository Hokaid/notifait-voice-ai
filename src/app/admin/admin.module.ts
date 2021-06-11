import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import {ResultsComponent} from './results/results.component';
import {GraphsComponent} from './graphs/graphs.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Angular Material
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatChipsModule} from "@angular/material/chips";
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    ResultsComponent,
    GraphsComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatChipsModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatCardModule,
    ChartsModule,
    FormsModule, 
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSelectModule
  ]
})
export class AdminModule { }
