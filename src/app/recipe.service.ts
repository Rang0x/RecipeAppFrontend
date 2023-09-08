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
  getAllRecipes():Observable<any>{
    return this.http.get(`${this.apiUrl}/GetAllRecipes`)
  }
}
