import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiUrl = 'https://localhost:7288/Recipe'; 
  constructor(private _http:HttpClient) { }
  getAllCategories()
  {
    return this._http.get(this.apiUrl + '/GetCategory');
  }
}
