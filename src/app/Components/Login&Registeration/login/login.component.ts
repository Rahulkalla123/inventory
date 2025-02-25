import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
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
}
