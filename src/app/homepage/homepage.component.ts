import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

RecipeService
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{
  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService){}
  ngOnInit(): void {
    // localStorage.setItem("currentPage", "");
    this.recipeService.getAllRecipes().subscribe((res) => {
      console.log(res); 
      this.recipes = res;
    })
    this.recipeService.getCategories().subscribe((res)=> console.log(res))
  }
}
