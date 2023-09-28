import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Recipe } from 'src/app/recipe';
import { RecipeService } from 'src/app/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

FormGroup
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
  providers: [MessageService]
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
      categoryName : new FormControl(''),
    });
    
  onCategoryOptionChange(e:any){
    //console.log(this.selectedCategory)
    console.log("clicked"+this.recipe.categoryId);
    this.recipe.categoryId=e.target.value;
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
            categoryName: this.recipe.categoryName
    
            
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
    
  constructor(private recipeService: RecipeService, private route :ActivatedRoute, private messageService: MessageService){}
  editRecipe() {
    // Update the recipe object with new values inside the subscribe block
    this.recipe.recipeName = this.editForm.get('recipeName')?.value;
    this.recipe.ingredients = this.editForm.get('ingredients')?.value;
    this.recipe.steps = this.editForm.get('steps')?.value;
    this.recipe.dietaryRestrictions = this.editForm.get('dietaryRestrictions')?.value;
    console.log(this.recipe);
    this.recipeService.editRecipe(this.recipe, this.recipe.id).subscribe((data) => {
      this.showLife();
      
      if (this.addedImage && this.file) {
        this.recipeService.uploadImage(this.file, this.recipe.id).subscribe((data) => {
          // Handle image upload response if needed
        });
      }
    });
  }
  
  onFileSelected(event: any) {
  
    this.file = event.target.files[0];
    this.addedImage=true;
  }
  showLife(){
  this.messageService.add({ severity: 'success', summary: 'Recipe Edit', detail: 'Recipe Updated Successfully!' });
  }
}





