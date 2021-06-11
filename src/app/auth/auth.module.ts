import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent, LoginDialog } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import {AuthRoutingModule} from "./auth.routing.module";

//Angular Material
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    LoginComponent,
    ForgetPasswordComponent,
    LoginDialog
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ]

})
export class AuthModule { }
