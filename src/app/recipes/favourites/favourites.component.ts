import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/auth.service';
import { FavouritesService } from 'src/app/favourites.service';
import { Recipe } from 'src/app/recipe';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  isLoading = true;
  recipeFound = false;
  recipes: Recipe[] = [];
  userId:string = this._authService.userId;
  constructor(private _favouritesService:FavouritesService, private _authService: AuthService, private messageServie: MessageService){}
  ngOnInit(): void {
    // localStorage.setItem("currentPage", "/My-favourites");
    this.getUserFav();
    console.log(this.userId);
  }
  getUserFav(){
    this._favouritesService.getUserFav(this.userId).subscribe(
      {
        next: (recipes) => {
          this.recipes = recipes;
          this.isLoading = false;
          console.log(this.recipes.length);
          if (recipes.length > 0) {
            this.recipeFound = true;
          }
          this.isLoading = false;
        },
        error: (err) => console.log(err)
      }
    )
  }

  removeFav(recipeId:any){
    this._favouritesService.removeFav(this.userId, recipeId).subscribe({
      next: (res) => {console.log(res)},
      error: () => {
        this.show();
        this.getUserFav();
      }
    })
  }

  show() {
    this.messageServie.add({ severity: 'error', key: 'del', summary: 'Delete', detail: 'Recipe Deleted Successfully from your favourites!' });
  }
  
}
