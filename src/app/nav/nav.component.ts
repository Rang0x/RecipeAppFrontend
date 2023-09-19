import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  searchValue:string ='';
  constructor(private router: Router) {}

  searchRecipe() {
    this.router.navigate(['/search'], { queryParams: { query: this.searchValue } });
  }
  openLoginDialog() {
    // Open the login dialog
    //this.loginDialog.showDialog();
  }
}

