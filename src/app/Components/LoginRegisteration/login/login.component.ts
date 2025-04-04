import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'
import { Router, RouterLink } from '@angular/router';
import { AllAPIService } from '../../../service/all-api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLoading = false;

  testimonials = [
    {
      name: 'Passwordless sign-in',
      content: 'Move away from risky passwords and experience one-tap access to Zoho. Download and install OneAuth.',
      imgage: 'assets/image.png'
    },
    {
      name: 'Passwordless sign-in',
      content: 'Move away from risky passwords and experience one-tap access to Zoho. Download and install OneAuth.',
      imgage: 'assets/image.png'
    },
  ];

  loginobj =  {
    Email: "",
    Password: ""
  }

  service = inject(AllAPIService);
  route   = inject(Router);

  onSubmit(form: NgForm) {
    if(!form.valid) {
      alert('Please fill all the required fields')
      return;
    }
    this.isLoading = true;
    this.service.login(this.loginobj).subscribe({
      next: (data) => {
        if(data.statusCode === 200 && data.success === true) {
          console.log('userData',data)
          localStorage.setItem('AccessToken',data.accessToken);
          localStorage.setItem('RefreshToken',data.refreshToken);
          this.isLoading = false;
          this.route.navigate(['/layout']);
        }else {
          this.service.logout();
          alert('Invalid credentials, please try again!')
        }
      },
      error: (error) => {
        console.log('loginError',error);
        alert(error.error.message);
        this.service.logout();
        this.isLoading = false;
      },
      complete: () => {
        console.log('Login completed')
        this.isLoading = false;
      }
    })
  }
}
