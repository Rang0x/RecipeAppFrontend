import { Component, numberAttribute } from '@angular/core';
import { Recipe } from '../../recipe';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { FavouritesService } from 'src/app/favourites.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent {
  reviews: any[] = [];
<<<<<<< Updated upstream
  recipe!: any;
  value!:number;
  dietaryRestriction: Message[] | any;
  messages: Message[] | any;
  categories:any;
  constructor(private route: ActivatedRoute,private service: RecipeService){}
=======
  recipe!: Recipe;
  value!:string;
  dietaryRestriction: Message[] | any;
  messages: Message[] | any;
  constructor(private route: ActivatedRoute,private _recipeservice: RecipeService,private _favouritesService:FavouritesService, private _messageService: MessageService){}
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      this.service.getCategories().subscribe(
        (categories) => {
          this.categories =categories;
        }
      );
      this.service.getRecipeById(recipeId).subscribe(
=======
      this._recipeservice.getRecipeById(recipeId).subscribe(
>>>>>>> Stashed changes
        (recipe) => {
          this.recipe = recipe;
          console.log('Recipes:', this.recipe);
          localStorage.setItem("currentPage", `recipes/${this.recipe.id}`)
          this.messages = [{key: 'diet' , severity: 'error', summary: 'Dietary Restrictions', detail: this.recipe.dietaryRestrictions }];
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
  addToFav(recipeId:number){
    this._favouritesService.addToFav(localStorage.getItem('userId')!,recipeId).subscribe({
      next: (res) => {
        console.log(res);
        console.log("DDDDDDDDDD");
        // ====================================================
        // =================ADD TOASTER HEREEEEE========================
        // ====================================================
        // ====================================================
        this.show();
      },
      error: () => {console.log("LOOOOOOOOOOOL");
      this.show()}
      
    })
  }
  show() {
    this._messageService.add({ severity: 'success', summary: 'Success', detail: 'Recipe added to your Favourites Successfully!' });
  }
}
