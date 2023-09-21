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
  searchValue:string ='';
  constructor(private router: Router, private _authService: AuthService) {
    _authService.userData.subscribe({
      next: () => {
        if(_authService.userData.getValue() !== null){
          this.isLogged = true;
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

