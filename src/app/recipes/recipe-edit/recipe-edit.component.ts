import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Recipe } from 'src/app/recipe';
import { RecipeService } from 'src/app/recipe.service';
import { ActivatedRoute } from '@angular/router';
FormGroup
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit{
    selectedCategory:any;
    recipe!: any;
    addedImage=false;
    file: any;
    categories: any = [];
    editForm = new FormGroup({
      recipeName : new FormControl(''),
      ingredients : new FormControl(''),
      steps : new FormControl(''),
      image : new FormControl(''),
      dietaryRestrictions : new FormControl(''),
    });
    
  
  onCategoryOptionChange(){
    console.log(this.selectedCategory)
    //console.log("clicked"+this.recipe.categoryId+","+this.selectedCategory.categoryId);
    this.recipe.categoryId=("Recipe ID = "+this.selectedCategory.categoryId);
    console.log(this.recipe.categoryId);

  }
  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      const recipeId = params['id']; 
      this.recipeService.getCategories().subscribe( 
        (categories) =>{
          this.categories=categories;
          console.log(categories);
        
        })
      this.recipeService.getRecipeById(recipeId).subscribe(

        (recipe) => {
          this.recipe = recipe;
          console.log('Recipe:', this.recipe);
          this.editForm.patchValue({
            recipeName: this.recipe.recipeName,
            ingredients: this.recipe.ingredients,
            steps: this.recipe.steps,
            dietaryRestrictions: this.recipe.dietaryRestrictions,
    
            
          });
          
          //this.selectedCategory=this.recipe.categoryId;
          console.log("hheerreee"+this.selectedCategory);
          console.log(this.recipe.categoryId);

        },
        (error) => {
          console.error('Error:', error);
        }
      );
      
    });
    }
    
  constructor(private recipeService: RecipeService, private route :ActivatedRoute){}
  editRecipe(){
    console.log(this.recipe);
    this.recipeService.editRecipe(this.recipe,this.recipe.id).subscribe((data) => {
      console.log(data);
      console.log(this.recipe)
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
  onFileSelected(event: any) {
  
    this.file = event.target.files[0];
    this.addedImage=true;
 }
}





