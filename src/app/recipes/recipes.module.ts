import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { SearchComponent } from './search/search.component';
import { BrowseComponent } from './browse/browse.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { MenubarModule } from 'primeng/menubar';
import {StyleClassModule} from 'primeng/styleclass';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { PaginatorModule } from 'primeng/paginator';
import { SplitPipe } from '../pipes/split.pipe';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MenuModule } from 'primeng/menu';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { MessagesModule } from 'primeng/messages';
import { CarouselModule } from 'primeng/carousel';
import { FavouritesComponent } from './favourites/favourites.component';
import { ToastModule } from 'primeng/toast';
import { PlannerComponent } from './planner/planner.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OrderListModule } from 'primeng/orderlist';
import { SearchPipe } from '../pipes/search.pipe';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PickListModule } from 'primeng/picklist';


@NgModule({
  declarations: [
    RecipePageComponent,
    AllRecipesComponent, 
    SearchComponent, 
    BrowseComponent,
    SplitPipe,
    SearchPipe,
    RecipeFormComponent, RecipeEditComponent, MyRecipesComponent, FavouritesComponent, PlannerComponent, ShoppingListComponent],
  imports: [
    CardModule,
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
    RatingModule,
    PaginatorModule,
    ProgressSpinnerModule,
    MenuModule,
    MessagesModule,
    CarouselModule,
    ToastModule,
    FullCalendarModule,
    DragDropModule,
    OrderListModule,
    PickListModule
  ],
  exports: [
    RecipePageComponent,
    AllRecipesComponent,
    SearchComponent,
    RecipeFormComponent,
    RecipeEditComponent,
    BrowseComponent,
    SplitPipe,
  ]
})
export class RecipesModule { }
