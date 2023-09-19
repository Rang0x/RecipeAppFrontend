import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit{
  value:string ='';
  recipes :any[] = []; 
  rows = 6;
  currentPage = 1;
  constructor(private browseService: RecipeService) { }
  
  ngOnInit() {
    this.browseService.getAllRecipes().subscribe(
      (recipes) => {
        this.recipes = recipes;
        console.log('Recipes:', this.recipes);
      },
      (error) => {
        console.error('Error:', error);
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
}
