import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService, User } from '../user.service'
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, HttpClientModule, HomeComponent],
  providers: [UserService],
  templateUrl: './index.auth.html',
  styleUrls: ['./style.auth.css']
})
export class AuthComponent {
  registerForm: FormGroup;
  loginForm: FormGroup;
  registerDisplay: boolean = true;
  loginDisplay: boolean = false; 
  user_login: string = '';
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.registerForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required]],
      surename: ['', [Validators.required]],
    });

    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  registerUser(): void {
    if (this.registerForm.valid) {
      this.userService.register(this.registerForm.value).subscribe({
        next: (response: any) => {
          console.log(response);
          if (response.status == 200){
            alert("User registered successfully");
            this.registerForm.reset()
          }
        },
        error: (error: any) => {
          console.error('Error registering user:', error);
        },
      });;
    }
    else{
      console.log("NotValid");
    }
  }

  loginUser(): void{
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value.login, this.loginForm.value.password).subscribe({
        next: (response: any) => {
          if (response.status == 200){
            localStorage.setItem('token', response.token);
            alert("User login successfully")
            this.router.navigate([`home`]);
          }
        },
        error: (error: any) => {
          console.error('Error registering user:', error);
        },
      });;
    }
    else{
      console.log("NotValid");
    }
  }

  showRegistr(): void{
    if (!this.registerDisplay){
      this.loginDisplay = false;
      this.registerDisplay = true;
    }     
  }

  showLogin(): void{
    if (!this.loginDisplay){
      this.loginDisplay = true;
      this.registerDisplay = false;
    }     
  }
}
