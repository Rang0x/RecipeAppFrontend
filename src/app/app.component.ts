import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLogged!: boolean;
  constructor(private _authservice : AuthService){
    _authservice.userData.subscribe({
      next: () => {
        if(_authservice.userData.getValue() !== null){
          this.isLogged = true;
        }
        else{
          this.isLogged = false;
        }
      }
    })
  }
  title = 'recipes-app';
}
