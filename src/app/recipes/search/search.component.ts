import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  formGroup!: FormGroup;
  tasks: any[] = []; // Initialize tasks
  value:string ='';
  recipes :any[] = []; 
  showIngredientsDropdown: boolean = false;
  ingredients: any[] = [
    { name: 'Ingredient 1' },
  { name: 'Ingredient 2' },
  ];
  selectedIngredients: any[] = [];

  onSearch() {
    this.searchService.searchByRecipeName(this.value).subscribe(
      (recipes) => {
        this.recipes = recipes;
        console.log('Recipes:', this.recipes);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  constructor(private searchService: RecipeService) { }

  ngOnInit() {
    
  }
}
