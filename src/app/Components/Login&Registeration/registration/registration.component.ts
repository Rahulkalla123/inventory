import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  testimonials = [
    {
      text: 'With Zoho Inventory, you can actually organize your business.',
      name: 'Ashish Verma',
      company: 'Operations & Logistics Manager, BOHECO',
      bgColor: 'rgb(255, 246, 230)',
      content: 'Quick product updates',
      imgage: 'assets/image.png'
    },
    {
      text: 'The Zoho Inventory app has been really helpful in tracking the movement of key SKUs and the team has been very kind in providing us with solutions to our queries.',
      bgColor: 'rgb(230, 248, 243)',
    },
    {
      text: "Zoho Inventory is an awesome software. It's automation feature is really nice. Most of the daily operations can be managed with the use of different APIs.",
      bgColor: 'rgb(230, 243, 248)',
    },
    {
      text: 'We manage all our inventory, sales, and purchases using Zoho Inventory and Zoho Books. They are easy to learn, easy to apply, and the support team is very helpful. We like Zoho very much!.',
      bgColor: 'rgb(250, 230, 244)',
    },
  ];
}
