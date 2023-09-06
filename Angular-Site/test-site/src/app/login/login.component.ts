import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiDataService } from '../api-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private apiDataService: ApiDataService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      this.apiDataService.login(username, password)
        .subscribe({
          next: (data: any) => {
            console.log('Login Successful:', data);
            // Redirect or perform other actions on successful login
            this.router.navigate(['/pokemon']);
          },
          error: (error) => {
            console.error('HTTP Error:', error);
            console.log('Full Error Response:', error.error);

            // Set the "incorrectLogin" error for the "username" field
            this.loginForm.get('username')?.setErrors({ incorrectLogin: true });
            // Handle error here if needed
          }
        });
    }
  }
}
