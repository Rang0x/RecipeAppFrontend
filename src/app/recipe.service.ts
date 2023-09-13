import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl = 'https://localhost:7288/Recipe'; 

  constructor(private http: HttpClient) { }

  searchByRecipeName(recipeName : string) : Observable<any> {
    return this.http.get(`${this.apiUrl}/GetRecipesByName/${recipeName}`);
  }
  getRecipeById(recipeId : number): Observable<any>{
    return this.http.get(`${this.apiUrl}/GetRecipeByID/${recipeId}`)
  }
  getAllRecipes(): Observable<any>{
    return this.http.get(`${this.apiUrl}/GetAllRecipes`);
  }
  postRecipe(recipe:{}): Observable<any>{
    return this.http.post(`${this.apiUrl}/add`, recipe);
  }
  editRecipe(recipe:{}, recipeId: any){
    return this.http.put(`${this.apiUrl}/UpdateRecipe/${recipeId}`, recipe)
  }
}
