import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService{
  
  private apiUrl = 'https://localhost:7288/api/ShoppingList/'; 
  constructor(private _httpCLient: HttpClient) { }
  generateUserList(userId:string) : Observable<any> {
    return this._httpCLient.post(`${this.apiUrl}GenerateShoppingList/${userId}`, {})
  }
  getUserList(userId:string): Observable<any> {
    return this._httpCLient.get(`${this.apiUrl}GetItems/${userId}`)
  }
  itemPurchased(userId:string, itemId:string): Observable<any>{
    return this._httpCLient.put(`${this.apiUrl}MarkAsDone/${userId}/${itemId}`, {})
  }
}
