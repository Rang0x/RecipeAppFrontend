import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  private apiUrl = 'https://localhost:7288/api/Review/'; 
  constructor(private _httpClient:HttpClient) { }
  addReview(userId:string, recipeId:number, text:string): Observable<any>{
    return this._httpClient.post(this.apiUrl + 'CreateReview', {
      "text": text,
      "userId": userId,
      "recipeId": recipeId
    })
  }
  getReviews(recipeId:number): Observable<any>{
    return this._httpClient.get(this.apiUrl + `GetReviewsForRecipe/${recipeId}`);
  }
  // getRecipeRate(recipeId:string): Observable<any>{
  //   return this._httpClient.get(this.apiUrl + `GetRatingsForRecipe/${recipeId}`)
  // }
}
