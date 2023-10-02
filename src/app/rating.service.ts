import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private apiUrl = 'https://localhost:7288/api/Rating/'; 
  constructor(private _httpClient:HttpClient) { }
  addRate(userId:string, recipeId:number, value:number): Observable<any>{
    return this._httpClient.post(this.apiUrl + 'CreateRating', {
      "value": value,
      "userId": userId,
      "recipeId": recipeId
    })
  }
  getRecipeRate(recipeId:number): Observable<any>{
    return this._httpClient.get(this.apiUrl + `GetRatingsForRecipe/${recipeId}`)
  }
  // removeFav(userId:string, recipeId:string) : Observable<any>{
  //   return this._httpClient.post(this.apiUrl + `removefromfavorites`, {
  //     userId: userId,
  //     recipeId: recipeId
  //   })
  // }
}
