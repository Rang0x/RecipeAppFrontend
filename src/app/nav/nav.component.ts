import { Component } from '@angular/core';
import { RegisterComponent } from '../users/register/register.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  visible: boolean = false;
  test(){
    console.log('aaaaaaa');
    
  }
}

