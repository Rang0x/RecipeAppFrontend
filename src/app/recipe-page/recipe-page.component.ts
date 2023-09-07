import { Component } from '@angular/core';
import { Recipe } from '../recipe';
import { TestServiceService } from '../test-service.service';


@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent {
  recipes: Recipe[] = [
    {
      recipeName: 'first',
      image: '../assets/img/a.jpg',
      ingredients: ['Salt', 'Bacon', 'Broccoli', 'Garlic'],
      steps: ['Put apple slices through a food processor', 'Combine sugars and apples and cook for 4 hours',
            'Put the cooked apples back through the food processor until smooth', 'Place back into an uncovered crock pot']
    },
    {
      recipeName : 'second',
      image : '../assets/img/b.jpg',
      ingredients: ['Salt', 'Bacon', 'Broccoli', 'Garlic'],
      steps: ['Put apple slices through a food processor', 'Combine sugars and apples and cook for 4 hours',
            'Put the cooked apples back through the food processor until smooth', 'Place back into an uncovered crock pot']
    },
    {
      recipeName : 'third',
      image : '../assets/img/c.jpg',
      ingredients: ['Salt', 'Bacon', 'Broccoli', 'Garlic'],
      steps: ['Put apple slices through a food processor', 'Combine sugars and apples and cook for 4 hours',
            'Put the cooked apples back through the food processor until smooth', 'Place back into an uncovered crock pot']
    }
  ]
  constructor(){
    
  }
}
