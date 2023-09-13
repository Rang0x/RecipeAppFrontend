import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input() visible: boolean = false;
  loginForm = new FormGroup({
    userEmail: new FormControl(''),
    userPass: new FormControl('')
  })
  onSubmit(){
    console.log(this.loginForm.value);
  }
  showDialog() {
    this.visible = true;
  }
  cancel() {
    this.visible = false;
  }
}
