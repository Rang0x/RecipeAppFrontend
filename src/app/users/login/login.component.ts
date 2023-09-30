import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input() visible: boolean = false;
  loginForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,12}$/))
  })
  isLoading:boolean = false;
  constructor(private _AuthService: AuthService, private _router:Router){}
  onSubmit(loginForm:object){
    console.log(this.loginForm.value);
    this.isLoading = true;
    this._AuthService.login(this.loginForm.value).subscribe(
      {
        next: (res) => {
            localStorage.setItem('userToken', res.token);
            this._AuthService.decodeUserToken();
<<<<<<< Updated upstream
            localStorage.setItem('userId',this._AuthService.userId);
=======
            localStorage.setItem('userId', this._AuthService.userId)
>>>>>>> Stashed changes
            this.isLoading = false;
            this._router.navigate(['/Browse']);
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
