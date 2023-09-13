import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { MenubarModule } from 'primeng/menubar';
import {StyleClassModule} from 'primeng/styleclass';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordModule } from 'primeng/password';
import { DialogModule } from 'primeng/dialog';
import { Login2Component } from './login2/login2.component';
import { CheckboxModule } from 'primeng/checkbox';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Login2Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectModule,
    BrowserAnimationsModule,
    DropdownModule,
    MenubarModule,
    StyleClassModule,
    PasswordModule,
    DialogModule,
    CheckboxModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    Login2Component
  ]
})
export class UsersModule { }
