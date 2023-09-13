import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component {
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
