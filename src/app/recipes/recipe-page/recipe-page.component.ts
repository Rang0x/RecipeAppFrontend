import { Component } from '@angular/core';
import { Recipe } from '../../recipe';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent {
  recipe!: Recipe;
  constructor(private route: ActivatedRoute,private service: RecipeService){}
  ngOnInit() {
    this.route.params.subscribe(params => {
      const recipeId = params['id']; 
      this.service.getRecipeById(recipeId).subscribe(
        (recipe) => {
          this.recipe = recipe;
          console.log('Recipes:', this.recipe);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    });
  }
  getIngredientsArray(): void{
    
  }
}
