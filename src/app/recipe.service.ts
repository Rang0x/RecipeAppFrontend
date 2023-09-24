import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse, HttpEventType, HttpParams } from '@angular/common/http';
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
  // sortByRating(): Observable<any>{
  //   return this.http.get(`${this.apiUrl}/SortByRating`)
  // }
  uploadImage(image: File, id: Number): Observable<any> {
    const formData = new FormData();
    formData.append('imageFile', image);
    return this.http.put<any>(`${this.apiUrl}/UploadImage/${id}`, formData);
  }
  deleteRecipe(recipeId: any): Observable<any>{
    return this.http.delete(`${this.apiUrl}/DeleteRecipe/${recipeId}`);
  }
  sortByRating(recipes: any[]): Observable<any> {
    
    return this.http.post<any>(`${this.apiUrl}/SortByRating`, recipes,{headers: {'Content-Type': 'application/json'}});
    // const url = `${this.apiUrl}/SortByRating`;
    // const options = { headers: { 'Content-Type': 'application/json' } };
    // console.log(recipes);
    // return this.http.post(url, recipes, options);
  }
  getRecipesByIngredients(selectedIngredients: string[]) {
    // Create an instance of HttpParams to handle query parameters
    let params = new HttpParams();

    // Add the selectedIngredients as query parameters (assuming it's an array)
    selectedIngredients.forEach(ingredient => {
      params = params.append('ingredients', ingredient);
    });

    // Make the GET request with the constructed URL and query parameters
    return this.http.get(`${this.apiUrl}/GetRecipesByIngredients`, { params: params });
  }
  getAllIngredients() {
    return this.http.get(`${this.apiUrl}/GetIngredients`);
  }
  getCategories() {
    return this.http.get(`${this.apiUrl}/GetCategory`);
  }
  getRecipesByCategoryID( id:any)
  {
    return this.http.get(`${this.apiUrl}/GetRecipesByCategory/${id}`);
  }
 

}
