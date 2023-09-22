import { Component , Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe';
import { RecipeService } from 'src/app/recipe.service';


@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit{
  @Input() recipe: Recipe = {
    id: 0,
    recipeName: '',
    ingredients: [],
    steps: [],
    image: '',
    dietaryRestrictions: '',
    popularity: 0,
    rating: 0,
  };
  postRecipe(){
    this.recipeService.postRecipe(this.recipe).subscribe((data) => {
      console.log(data)
    });
    console.log(this.recipe);
  }
  constructor(private recipeService: RecipeService){}
  ngOnInit(): void {
    localStorage.setItem("currentPage", "Add-recipe");
  }
}
