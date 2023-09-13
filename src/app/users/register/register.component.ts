import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  ourObj: any = {};
  @Input() visible: boolean = false;
  registerForm = new FormGroup({
    userName: new FormControl(''),
    userEmail: new FormControl(''),
    userPass: new FormControl(''),
  });
  onSubmit() {
    console.log(this.registerForm.value);
    
  }
  showDialog() {
      this.visible = true;
  }
  cancel() {
    this.visible = false;
  }
}
