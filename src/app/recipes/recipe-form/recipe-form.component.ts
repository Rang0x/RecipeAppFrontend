import { Component , Input } from '@angular/core';
import { Recipe } from '../../recipe';
import { RecipeService } from 'src/app/recipe.service';


@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent {
  @Input() recipe: Recipe = {
      recipeName: "",
      ingredients: "",
      steps: "",
      image: "",
      dietaryRestrictions: "",
      createdOn: new Date(),
      popularity: 0,
      rating: 0
  };
  addedImage=false;
  file: any;
  onFileSelected(event: any) {
  
     this.file = event.target.files[0];
     this.addedImage=true;
  }
  postRecipe(){
    this.recipeService.postRecipe(this.recipe).subscribe((data) => {
      this.recipe=data;
      console.log(this.recipe.id)
      if(this.addedImage)
      {
        
        if (this.file && this.recipe.id !== undefined) 
        {
          this.recipeService.uploadImage(this.file, this.recipe.id).subscribe((data) => {

          });
        }
      }});
    
    console.log(this.recipe);
  }
  constructor(private recipeService: RecipeService){}
}
