import { Component , Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe';
import { RecipeService } from 'src/app/recipe.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';


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
      categoryName: "",
      userId: Number(localStorage.getItem('userId'))
  };
  addedImage=false;
  file: any;
  selectedCategory:any;
  
  categories: any = [];
  onFileSelected(event: any) {
  
     this.file = event.target.files[0];
     this.addedImage=true;
  }
  postRecipe(){
    this.recipeService.postRecipe(this.recipe).subscribe((data) => {
      this.recipe=data;
      console.log(this.recipe.id)
      this.showLife();
      if(this.addedImage)
      {
        
        if (this.file && this.recipe.id !== undefined) 
        {
          this.recipeService.uploadImage(this.file, this.recipe.id).subscribe((data) => {
            if(this.recipe.id !== undefined)
            {
              this.router.navigate(['My-recipes']);
            }
          });
        }
      }

    });
    
    console.log(this.recipe);
  }
  constructor(private recipeService: RecipeService,private router: Router, private messageService: MessageService){}
  ngOnInit(): void {
    // localStorage.setItem("currentPage", "Add-recipe");
    this.recipeService.getCategories().subscribe(
      (categories) =>{
        this.categories=categories;
      }
    )
  }
  onCategoryOptionChange(){
    this.recipe.categoryName = this.selectedCategory.categoryName;
  }
  showLife(){
    this.messageService.add({key:'show', severity: 'success', summary: 'Recipe Add', detail: 'Recipe Added Successfully!' });
    }
}
