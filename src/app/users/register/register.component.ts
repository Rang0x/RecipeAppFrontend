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
    firstName: new FormControl('', [Validators.minLength(3), Validators.maxLength(12)]),
    lastName: new FormControl('', [Validators.minLength(3), Validators.maxLength(12)]),
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,12}$/))
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
          console.log(res);
            this.isLoading = false;
            this._router.navigate(['/Login'])
        },
        error: (err) => {
          console.log(err);
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
