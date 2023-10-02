import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlannerService {

  private apiUrl = 'https://localhost:7288/api/Planner/'; 
  constructor(private _httpClient:HttpClient) { }
  postUserPlanner(dateStr:string, recipeId:string, userId:string): Observable<any>{
    return this._httpClient.post(this.apiUrl, {
      "dateString": dateStr,
      "recipeID": recipeId,
      "userID": userId
    })
  };
  editUserPlanner(mealId:string, dateStr:string, recipeId:string): Observable<any>{
    return this._httpClient.put(`${this.apiUrl}${mealId}`, {
      "mealID": mealId,
      "dateString": dateStr,
      "recipeID": recipeId
    })
  };
  getUserPlanner(userId:string): Observable<any>{
    return this._httpClient.get(`${this.apiUrl}GetUserPlansByUserID/${userId}`)
  }
  deleteEvent(mealId:string): Observable<any>{
    return this._httpClient.delete(`${this.apiUrl}${mealId}`)
  }
}
