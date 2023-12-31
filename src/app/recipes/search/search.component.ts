import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, throwError } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  value:string ='';
  recipes :any[] = []; 
  rows = 6;
  currentPage = 1;
  
  constructor(private searchService: RecipeService,private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.value = params['query'];
      this.onSearch();
    });
  }

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
  getRecipesForPage(page: number): any[] {
    const startIndex = (page - 1) * this.rows;
    const endIndex = startIndex + this.rows;
    return this.recipes.slice(startIndex, endIndex);
  }
  onPageChange(event: any) {
    this.currentPage = event.page + 1;
  }
}
