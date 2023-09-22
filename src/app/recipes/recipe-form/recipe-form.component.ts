import { Component , Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe';
import { RecipeService } from 'src/app/recipe.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit{
  @Input() recipe: Recipe = {
      recipeName: "",
      ingredients: "",
      steps: "",
      dietaryRestrictions: "",
      //categories: "Dinner",
      userId: 1,
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
      }
      if(this.recipe.id !== undefined)
      {
        this.router.navigate(['recipes', this.recipe.id]);
      }
    });
    
    console.log(this.recipe);
  }
  constructor(private recipeService: RecipeService,private router: Router){}
  ngOnInit(): void {
    localStorage.setItem("currentPage", "Add-recipe");
  }
}
