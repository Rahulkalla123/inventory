import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { routes } from '../../../app.routes';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email : any

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

  router = inject(Router)
  onSubmit() {
    debugger
    if(this.email === 'skillrat@gmail.com') {
      alert('login Successfull')
      this.router.navigateByUrl('/layout')
    }
    else {
      alert('email not registered')
    }
  }
}
