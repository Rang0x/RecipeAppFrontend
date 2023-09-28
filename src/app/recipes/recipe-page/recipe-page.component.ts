import { Component } from '@angular/core';
import { Recipe } from '../../recipe';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent {
  reviews: any[] = [];
  recipe!: any;
  value!:number;
  dietaryRestriction: Message[] | any;
  messages: Message[] | any;
  categories:any;
  constructor(private route: ActivatedRoute,private service: RecipeService){}
  ngOnInit() {
    // this.dietaryRestriction = [
    //   { severity: 'success', summary: 'Dietary Restrictions', detail: `${this.recipe.dietaryRestrictions}` }
    // ];

    this.reviews= [
      {
        name: 'Abdelrahman',
        text: 'This is a great recipe!',
        rating: 3
      },
      {
        name: 'Maryem',
        text: 'I really enjoy this recipe.',
        rating: 4
      },
      {
        name: 'Sarah',
        text: 'Best Ever Nutella Brownies',
        rating: 4
      },
      {
        name: 'Sarah',
        text: 'Best Ever Nutella Brownies',
        rating: 2
      }
    ];
    this.route.params.subscribe(params => {
      const recipeId = params['id']; 
      this.service.getCategories().subscribe(
        (categories) => {
          this.categories =categories;
        }
      );
      this.service.getRecipeById(recipeId).subscribe(
        (recipe) => {
          this.recipe = recipe;
          console.log('Recipes:', this.recipe);
          localStorage.setItem("currentPage", `recipes/${this.recipe.id}`)
          this.messages = [{ severity: 'error', summary: 'Dietary Restrictions', detail: this.recipe.dietaryRestrictions }];
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    });
  }
  findCategoryName(categoryId: number): string {
    const category = this.categories.find((cat: { categoryId: number; }) => cat.categoryId === categoryId);
    return category ? category.categoryName : '';
  }
}
