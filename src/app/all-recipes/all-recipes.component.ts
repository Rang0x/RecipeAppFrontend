import { Component } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
})
export class AllRecipesComponent {
  recipes: Recipe[] = [
    {
      recipeName : 'first',
      image : '../assets/img/a.jpg',
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
    },
    {
      recipeName : 'fourth',
      image : '../assets/img/d.jpg',
      ingredients: ['Salt', 'Bacon', 'Broccoli', 'Garlic'],
      steps: ['Put apple slices through a food processor', 'Combine sugars and apples and cook for 4 hours',
            'Put the cooked apples back through the food processor until smooth', 'Place back into an uncovered crock pot']
    },
    {
      recipeName : 'dummy',
      image : '../assets/img/e.jpg',
      ingredients: ['Salt', 'Bacon', 'Broccoli', 'Garlic'],
      steps: ['Put apple slices through a food processor', 'Combine sugars and apples and cook for 4 hours',
            'Put the cooked apples back through the food processor until smooth', 'Place back into an uncovered crock pot']
    },
    {
      recipeName : 'test',
      image : '../assets/img/f.jpg',
      ingredients: ['Salt', 'Bacon', 'Broccoli', 'Garlic'],
      steps: ['Put apple slices through a food processor', 'Combine sugars and apples and cook for 4 hours',
            'Put the cooked apples back through the food processor until smooth', 'Place back into an uncovered crock pot']
    },
    {
      recipeName : 'fifth',
      image : '../assets/img/g.jpg',
      ingredients: ['Salt', 'Bacon', 'Broccoli', 'Garlic'],
      steps: ['Put apple slices through a food processor', 'Combine sugars and apples and cook for 4 hours',
            'Put the cooked apples back through the food processor until smooth', 'Place back into an uncovered crock pot']
    },
    {
      recipeName : 'fifth',
      image : '../assets/img/a.jpg',
      ingredients: ['Salt', 'Bacon', 'Broccoli', 'Garlic'],
      steps: ['Put apple slices through a food processor', 'Combine sugars and apples and cook for 4 hours',
            'Put the cooked apples back through the food processor until smooth', 'Place back into an uncovered crock pot']
    },
  ]
}
