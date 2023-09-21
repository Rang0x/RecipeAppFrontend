import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { MenubarModule } from 'primeng/menubar';
import {StyleClassModule} from 'primeng/styleclass';

import { HomepageComponent } from './homepage/homepage.component';
import { RecipesModule } from './recipes/recipes.module';
import { UsersModule } from './users/users.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { SearchComponent } from './recipes/search/search.component';
import { AboutComponent } from './about/about.component';
import { BrowseComponent } from './recipes/browse/browse.component';
import { RecipePageComponent } from './recipes/recipe-page/recipe-page.component';
//import { SplitPipe } from 'src/app/pipes/split.pipe';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuModule } from 'primeng/menu';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeFormComponent } from './recipes/recipe-form/recipe-form.component';
import { authGuard } from './auth.guard';
import { ToastModule } from "primeng/toast";
import { MessageService } from 'primeng/api';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path:'search', canActivate: [authGuard],component: SearchComponent},
  {path:'About',component: AboutComponent},
  {path:'Browse', canActivate: [authGuard],component: BrowseComponent},
  {path: 'recipes/:id', canActivate: [authGuard], component: RecipePageComponent },
  {path:'Login',component: LoginComponent},
  {path:'Register',component: RegisterComponent},
  {path:'Add-recipe', canActivate: [authGuard], component: RecipeFormComponent},
  {path:'Edit-recipe', canActivate: [authGuard], component: RecipeEditComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    SidebarComponent,
    //SplitPipe,
    //LoginComponent,
    // RegisterComponent
  ],
  imports: [
    CardModule,
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectModule,
    BrowserAnimationsModule,
    DropdownModule,
    MenubarModule,
    StyleClassModule,
    RecipesModule,
    UsersModule,
    PasswordModule,
    CheckboxModule,
    ToastModule,
    RouterModule.forRoot(appRoutes),
    MenuModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
