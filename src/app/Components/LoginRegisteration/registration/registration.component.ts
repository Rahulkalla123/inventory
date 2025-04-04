import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {  Router, RouterLink } from '@angular/router';
import { AllAPIService } from '../../../service/all-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent  {
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

  isLoading = false;

  registerObj = {
    CompanyName: "",
    Email: "",
    Number: "",
    Password: ""
  }
 
  service = inject(AllAPIService);
  route = inject(Router);

  onSubmit(form: NgForm) {
    if(!form.valid) {
      alert('Please fill all the required fields');
      return;
    }
    this.isLoading = true; 
    this.service.register(this.registerObj).subscribe({
      next: (data) => {
        if(data.statusCode ===  200) {
          console.log('userData', data);
          this.isLoading = false; 
          this.route.navigate(['/login']);
          alert(data.message);
        }      
      },
      error: (error) => {
        console.log('error',error);
        if(error.status === 400) {
          this.isLoading = false; 
          confirm(error.error.message + 'Do you want to Login?');
          this.route.navigate(['/login']);
        }
        if(error.status === 204 || error.status === 200){
          this.isLoading = false; 
          alert('Register successfully');
          this.route.navigate(['/login']);
        }
      },
    })
 }
}

