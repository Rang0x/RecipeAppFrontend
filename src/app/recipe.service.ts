import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse, HttpEventType } from '@angular/common/http';
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
  postRecipe(recipe:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/AddRecipe`, recipe,{headers: {'Content-Type': 'application/json'}});
  }
  editRecipe(recipe:{}, recipeId: any){
    return this.http.put(`${this.apiUrl}/UpdateRecipe/${recipeId}`, recipe)
  }
  sortByRating(): Observable<any>{
    return this.http.get(`${this.apiUrl}/SortByRating`)
  }
  uploadImage(image: File, id: Number): Observable<any> {
    const formData = new FormData();
    formData.append('imageFile', image);
    return this.http.put<any>(`${this.apiUrl}/UploadImage/${id}`, formData);
  }
  deleteRecipe(recipeId: any): Observable<any>{
    return this.http.delete(`${this.apiUrl}/DeleteRecipe/${recipeId})`);
  }
}
