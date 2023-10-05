import { Component, numberAttribute } from '@angular/core';
import { Recipe } from '../../recipe';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { FavouritesService } from 'src/app/favourites.service';
import { RatingService } from 'src/app/rating.service';
import { AuthService } from 'src/app/auth.service';
import { ReviewsService } from 'src/app/reviews.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent {
  reviews: any[] = [];
  recipe!: Recipe;
  value!:number;
  dietaryRestriction: Message[] | any;
  messages: Message[] | any;
  categories:any;
  userId:string = this._authService.userId;
  reviewText:string = '';
  constructor(private route: ActivatedRoute, private _route: Router, private _reviewService: ReviewsService, private _authService: AuthService, private _ratingservice: RatingService, private _recipeservice: RecipeService, private _favouritesService:FavouritesService, private _messageService: MessageService){}
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
      this._recipeservice.getRecipeById(recipeId).subscribe(
        (recipe) => {
          this.recipe = recipe;
          console.log('Recipes:', this.recipe);
          // localStorage.setItem("currentPage", `recipes/${this.recipe.id}`)
          this.messages = [{key: 'diet' , severity: 'error', summary: 'Dietary Restrictions', detail: this.recipe.dietaryRestrictions }];
        },
        (error) => {
          console.error('Error:', error);
        }
      );
      this._ratingservice.getRecipeRate(recipeId).subscribe((res) => console.log(res));
      this.getReviews(recipeId);
      this.getRecipeRate(recipeId);
      this._recipeservice.getCategories().subscribe(
        (categories) => {
          this.categories =categories;
        }
      );
    });
  }
  findCategoryName(categoryId: number): string {
    const category = this.categories.find((cat: { categoryId: number; }) => cat.categoryId === categoryId);
    return category ? category.categoryName : '';
  }
  addToFav(recipeId:number){
    this._favouritesService.addToFav(localStorage.getItem('userId')!,recipeId).subscribe({
      next: (res) => {
        console.log(res);
        console.log("DDDDDDDDDD");
        this.show();
      },
      error: () => {console.log("LOOOOOOOOOOOL");
      this.show()}
      
    })
  }
  show() {
    this._messageService.add({ severity: 'success', summary: 'Success', detail: 'Recipe added to your Favourites Successfully!' });
  }
  success() {
    this._messageService.add({ severity: 'success', summary: 'Success', detail: 'Your Review Added Successfully!' });
  }
  // ========= Rating Service Methods ============
  addRate(recipeid:number) {
    console.log(`${recipeid} + ${this.value}`);
    this._ratingservice.addRate(this.userId, recipeid, this.value).subscribe((res) => console.log(res)
    )
  }
  getRecipeRate(recipeId:number) {
    
    this._ratingservice.getRecipeRate(recipeId).subscribe((res) => console.log(res)
    )
  }
  // ========= Review Service Methods ============
  addReview(recipeId:number) {
    this._reviewService.addReview(this.userId, recipeId, this.reviewText).subscribe((res) => {
      this.success();
      this.reviewText = '';
      console.log(res);
      this.getReviews(recipeId)
    }
    )
  }
  getReviews(recipeId:number) {
    this._reviewService.getReviews(recipeId).subscribe((res) => {
      console.log(res);
      this.reviews = res;
  })
}
}

