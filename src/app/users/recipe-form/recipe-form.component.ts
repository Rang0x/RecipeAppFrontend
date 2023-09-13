import { Component , Input } from '@angular/core';
import { Recipe } from '../../recipe';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent {
  @Input() recipe: Recipe = {
    id: 0,
    recipeName: '',
    ingredients: [],
    steps: [],
    image: '',
    dietaryRestriction: '',
    popularity: 0,
    rating: 0,
  };
  getForm(){
    console.log(this.recipe);
  }
}
