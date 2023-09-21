import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  ourObj: any = {};
  isLoading: boolean = false;
  @Input() visible: boolean = false;
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(3), Validators.maxLength(8)]),
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(3)),
    rePassword: new FormControl('', Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,12}$/)),
    phone: new FormControl(''),
  });
  constructor(private _authService: AuthService, private _router:Router){}
  onSubmit(registerForm:object) {
    console.log(this.registerForm.value);
    console.log(registerForm);
    this.isLoading = true;
    this._authService.register(this.registerForm.value).subscribe
    (
      {
        next: (res) => {
          if(res.message === 'success'){
            this.isLoading = false;
            this._router.navigate(['/login'])
          }
        },
        error: (err) => {

        }
      }
    )
  }
  showDialog() {
      this.visible = true;
  }
  cancel() {
    this.visible = false;
  }
}
