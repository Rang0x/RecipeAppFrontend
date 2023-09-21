import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Recipe } from 'src/app/recipe';
import { RecipeService } from 'src/app/recipe.service';
FormGroup
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit{
    recipeToEdit!: Recipe;
    editForm = new FormGroup({
      recipeName : new FormControl(`${this.recipeToEdit}`),
      ingredients : new FormControl(''),
      steps : new FormControl(''),
      image : new FormControl(''),
      dietaryRestrictions : new FormControl('')
    })
  editRecipe(){
    console.log(this.editForm.value)
  }
  getRecipeById(){
    this.recipeService.getRecipeById(1).subscribe({
      next: (data) => this.recipeToEdit = data,
      complete: () => this.editForm = new FormGroup({
        recipeName : new FormControl(`${this.recipeToEdit.recipeName}`),
        ingredients : new FormControl(`${this.recipeToEdit.ingredients}`),
        steps : new FormControl(`${this.recipeToEdit.steps}`),
        image : new FormControl(`${this.recipeToEdit.image}`),
        dietaryRestrictions : new FormControl(`${this.recipeToEdit.dietaryRestrictions}`)
      })
    });
  }
  ngOnInit(): void {
    this.getRecipeById();
    }
  constructor(private recipeService: RecipeService){}
}
