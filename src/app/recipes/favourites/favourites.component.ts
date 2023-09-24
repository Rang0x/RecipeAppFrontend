import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipe';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService){}
  ngOnInit(): void {
    localStorage.setItem("currentPage", "/My-favourites");
    this.recipeService.getAllRecipes().subscribe((res) => {
      console.log(res); 
      this.recipes = res;
    })
    this.recipeService.getCategories().subscribe((res)=> console.log(res))
  }
}
