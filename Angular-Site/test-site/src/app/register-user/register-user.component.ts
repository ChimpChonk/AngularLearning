import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiDataService } from '../api-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  registerForm: FormGroup;
  registrationError: string | null = null;

  constructor(
    private apiDataService: ApiDataService,
    private formBuilder: FormBuilder,
    private router: Router
  ){
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const username = this.registerForm.value.username;
      const password = this.registerForm.value.password;
  
      const userData = {
        username: username,
        password: password
      };
  
      this.apiDataService.createLogin('User', 'register', userData)
        .subscribe({
          next: (data: any) => {
            console.log('Register Successful:', data);
            // Redirect to /login on successful registration
            this.router.navigate(['/login']);
          },
          error: (error) => {
            console.error('HTTP Error:', error);
            console.log('Full Error Response:', error.error);
  
            // Set the registration error message
            this.registrationError = error.error;
          }
        });
    }
  }
  
  
  passwordsDoNotMatch(): boolean {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;

    return password !== confirmPassword;
  }
}
