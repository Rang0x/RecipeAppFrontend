import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { authGuard } from './auth.guard';
import { RecipePageComponent } from './recipes/recipe-page/recipe-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchComponent } from './recipes/search/search.component';
import { AboutComponent } from './about/about.component';
import { BrowseComponent } from './recipes/browse/browse.component';
import { RecipeFormComponent } from './recipes/recipe-form/recipe-form.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { MyRecipesComponent } from './recipes/my-recipes/my-recipes.component';
import { FavouritesComponent } from './recipes/favourites/favourites.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path:'search', canActivate: [authGuard],component: SearchComponent},
  {path:'About',component: AboutComponent},
  {path:'Browse', canActivate: [authGuard],component: BrowseComponent},
  {path: 'recipes/:id', canActivate: [authGuard], component: RecipePageComponent },
  {path:'Login',component: LoginComponent},
  {path:'Register',component: RegisterComponent},
  {path:'Add-recipe', canActivate: [authGuard], component: RecipeFormComponent},
  {path:'My-favourites', canActivate: [authGuard], component: FavouritesComponent},
  {path:'Edit-recipe/:id', canActivate: [authGuard], component: RecipeEditComponent},
  {path: 'My-recipes',canActivate: [authGuard], component: MyRecipesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
