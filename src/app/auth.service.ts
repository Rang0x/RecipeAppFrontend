import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7288/api/'; 
  // private apiUrl = 'https://route-ecommerce.onrender.com/'; 
  userData:BehaviorSubject<any> = new BehaviorSubject(null);
  loggedUserName:string = '';
  constructor(private _httpClient: HttpClient, private _router:Router) {
    if(localStorage.getItem("userToken") === null){
      _router.navigate(["/Login"])
    }
    else{
      this.decodeUserToken();
      _router.navigate([localStorage.getItem("currentPage")])
    }
  }
  decodeUserToken(){
    let encodedToken:string = JSON.stringify( localStorage.getItem('userToken'));
    let decodedToken:any = jwtDecode(encodedToken);
    console.log(decodedToken.name);
    this.loggedUserName = decodedToken.name;
    this.userData.next(decodedToken);
  }
  register(registerData:object):Observable<any>{
    return this._httpClient.post(this.apiUrl + 'User/register', registerData)
  }
  login(loginData:object):Observable<any>{
    return this._httpClient.post(this.apiUrl + 'User/login', loginData)
  }
  logout(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._router.navigate(['Login'])
  }
}
