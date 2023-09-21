import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

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
                label: 'My Recipes',
                icon: 'pi pi-fw pi-book'
              },
              {
                  label: 'New',
                  icon: 'pi pi-fw pi-plus',
                  routerLink: 'Add-recipe'
              },
              {
                  label: 'Edit',
                  icon: 'pi pi-fw pi-user-edit',
                  routerLink: 'Edit-recipe'
              },
          ]
      }]

  }
}
