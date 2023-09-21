import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://route-ecommerce.onrender.com/'; 
  userData = new BehaviorSubject(null);
  constructor(private _httpClient: HttpClient, private _router:Router) { }
  decodeUserToken(){
    let encodedToken:string = JSON.stringify( localStorage.getItem('userToken'));
    let decodedToken:any = jwtDecode(encodedToken);
    console.log(decodedToken);
    this.userData.next(decodedToken);
  }
  register(registerData:object):Observable<any>{
    return this._httpClient.post(this.apiUrl + 'api/v1/auth/signup', registerData)
  }
  login(loginData:object):Observable<any>{
    return this._httpClient.post(this.apiUrl + 'api/v1/auth/signin', loginData)
  }
  logout(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._router.navigate(['Login'])
  }
}
