import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.scss']
})
export class MyRecipesComponent {
  value: string = '';
  recipes: any[] = [];
  rows = 6;
  currentPage = 1;
  isLoading = true;
  recipeFound = false;
  sortOptions: any[] = [
    //{ label: 'Popularity', value: 'Popularity' },
    { label: 'none', value: 'none' },
    { label: 'Rating', value: 'Rating' },
    //{ label: 'Most Recent', value: 'Recent' },
  ];

  selectedSortOption: any = '';

  constructor(private recipeService: RecipeService,private router: Router) { }

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes() {
    this.recipeService.getAllRecipes().subscribe(
      (recipes) => {
        this.recipes = recipes;
        console.log('Recipes:', this.recipes);
        if (recipes.length > 0) {
          this.recipeFound = true;
        }
        this.isLoading = false;
      },
      (error) => {
        console.error('Error:', error);
        this.isLoading = false;
      }
    );
  }

  getRecipesForPage(page: number): any[] {
    const startIndex = (page - 1) * this.rows;
    const endIndex = startIndex + this.rows;
    return this.recipes.slice(startIndex, endIndex);
  }

  onPageChange(event: any) {
    this.currentPage = event.page + 1;
  }

  onSortOptionChange() {
    console.log(this.selectedSortOption);
    if (this.selectedSortOption.label=== 'Rating') {
      console.log('Selected Sort Option:', this.selectedSortOption);

      this.isLoading = true;
      this.recipeService.sortByRating().subscribe((recipes) => {
        console.log('Selected Sort Option:', this.selectedSortOption);
        this.recipes = recipes;
        this.isLoading = false;
      });
    } else {
      this.loadRecipes();
      
    }
  }
  deleteRecipe(recipeId: number) {
    this.recipeService.deleteRecipe(recipeId).subscribe((recipes) => {
      console.log('Deleted Recipe:', recipeId);
      this.loadRecipes();
  });
}
  editRecipe(recipeId: number) {
    this.router.navigate(['/Edit-recipe', recipeId]);
    
  }
}







