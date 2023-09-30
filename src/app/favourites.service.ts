import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  private apiUrl = 'https://localhost:7288/api/Favorite/'; 
  constructor(private _httpClient:HttpClient) { }

  addToFav(userId:string, recipeId:number): Observable<any>{
    return this._httpClient.post(this.apiUrl + 'addtofavorites', {
      userId: userId,
      recipeId: recipeId
    })
  }
  getUserFav(userId:string): Observable<any>{
    return this._httpClient.get(this.apiUrl + `favorites/${userId}`)
  }
  removeFav(userId:string, recipeId:string) : Observable<any>{
    return this._httpClient.post(this.apiUrl + `removefromfavorites`, {
      userId: userId,
      recipeId: recipeId
    })
  }
}
