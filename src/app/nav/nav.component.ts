import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isLogged: boolean = false;
  loggedUserName:string = '';
  searchValue:string ='';
  items: any[] = [
    {
      label: 'Create Recipe',
      icon: 'pi pi-plus pink-icon',
      style: 'color: pink;', 
      command: () => {
        console.log('Create Recipe clicked');
      }
    },
    {
      label: 'Favorites',
      icon: 'pi pi-star pink-icon', 
      command: () => {
        console.log('Favorites clicked');
      }
    },
    {
      label: 'My Recipes',
      icon: 'pi pi-book pink-icon', 
      command: () => {
        console.log('My Recipes clicked');
      }
    }
  ];
  constructor(private router: Router, private _authService: AuthService) {
    _authService.userData.subscribe({
      next: () => {
        if(_authService.userData.getValue() !== null){
          this.isLogged = true;
          this.loggedUserName = _authService.loggedUserName;
        }
        else{
          this.isLogged = false;
        }
      }
    })
  }

  searchRecipe() {
    this.router.navigate(['/search'], { queryParams: { query: this.searchValue } });
  }
  logOut(){
    this._authService.logout();
  }
}

