import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
})
export class AllRecipesComponent implements OnInit {
  recipes: Recipe[] = [];
    ngOnInit(): void {
      this.recipesService.getAllRecipes().subscribe((data) => {
        this.recipes = data;
        console.log(this.recipes);
      });
    }
    editForm(recipeId:any){
      console.log(this.recipes);
      console.log(recipeId);
    }
  constructor(private recipesService: RecipeService){}
}
