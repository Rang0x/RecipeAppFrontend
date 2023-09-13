import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { MenubarModule } from 'primeng/menubar';
import {StyleClassModule} from 'primeng/styleclass';



@NgModule({
  declarations: [RecipePageComponent, AllRecipesComponent, SearchComponent],
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
  ],
  exports: [
    RecipePageComponent,
    AllRecipesComponent,
    SearchComponent
  ]
})
export class RecipesModule { }
