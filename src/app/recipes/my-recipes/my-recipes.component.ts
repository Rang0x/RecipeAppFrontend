import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.scss']
})
export class MyRecipesComponent {
  value: number = 0;
  recipes: any[] = [];
  rows = 6;
  currentPage = 1;
  isLoading = true;
  recipeFound = false;
  sortOptions: any[] = [
    //{ label: 'Popularity', value: 'Popularity' },
    { label: 'none', value: 'None' },
    { label: 'Rating', value: 'Rating' },
    //{ label: 'Most Recent', value: 'Recent' },
  ];

  selectedSortOption: any = '';

  constructor(private recipeService: RecipeService,private router: Router,private messageService:MessageService) { }

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes() {
    const userId = localStorage.getItem('userId');
    console.log(userId);
    this.recipeService.getUserRecipes(userId).subscribe(
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

  deleteRecipe(recipeId: number) {
    this.recipeService.deleteRecipe(recipeId).subscribe((data) => {
      console.log(data);
      this.confirmDelete();
      this.loadRecipes();
  });
}
  editRecipe(recipeId: number) {
    this.router.navigate(['/Edit-recipe', recipeId]);
    
  }
  test(){
    alert("HEYY")
  }
  onConfirm(){
    alert("CONFIRRMMM")
  }
  onReject(){
    alert("REJEECT")
  }
  showConfirm(){
      this.messageService.add({ severity: 'error', summary: 'Recipe Delete', detail: 'Are you sure ?', sticky: true, key: 'confirm' });
  }
  confirmDelete(){
      this.messageService.add({ severity: 'success', summary: 'Recipe Deleted Successfully!'});
  }
}







