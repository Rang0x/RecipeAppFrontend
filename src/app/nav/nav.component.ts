import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isLogged: boolean = false;
  loggedUserName:string = '';
  searchValue:string ='';
  // value: any = this._authService.numberOfFav;
  items: any[] = [
    {
      label: 'Create Recipe',
      icon: 'pi pi-plus pink-icon',
      style: 'color: pink;', 
      command: () => {
        this.router.navigate(['/Add-recipe']);
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
        this.router.navigate(['/My-Recipes']);
      }
    },
    {
      label: 'Logout',
      icon: 'pi pi-sign-out pink-icon',
      command: () => {
        this.isLogged=false;
        console.log('Logout clicked');
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

