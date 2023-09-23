import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  plainMenuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.plainMenuItems = [
      {
          label: 'Recipes',
          items: [
              {
                label: 'All Recipes',
                icon: 'pi pi-fw pi-book',
                routerLink: 'Browse'
              },
              {
                label: 'My Recipes',
                icon: 'pi pi-fw pi-th-large'
              },
              {
                  label: 'Add Recipe',
                  icon: 'pi pi-fw pi-plus',
                  routerLink: 'Add-recipe'
              },
              {
                  label: 'My Favourites',
                  icon: 'pi pi-fw pi-heart',
                  routerLink: 'Add-recipe'
              }
          ]
      }]

  }
}
