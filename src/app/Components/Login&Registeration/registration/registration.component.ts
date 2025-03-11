import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AllAPIService } from '../../../service/all-api.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule,ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnInit {
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
  authService = inject(AllAPIService);
  router = inject(Router);
  fb = inject(FormBuilder);

  registrationForm! : FormGroup ;
  submitted = false;

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.registrationForm = this.fb.group({
      CompanyName:['',[Validators.required,Validators.minLength(3)]],
      Email      :['',[Validators.required,Validators.email,]],
      Number     :['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      Password   :['',[Validators.required,Validators.minLength(6)]]
    })
  }

  get f() { return this.registrationForm.controls; }

  onSubmit() {
    this.submitted = true;

    if(this.registrationForm.invalid) {
      return;
    }

    this.authService.register(this.registrationForm.value).subscribe({
      next: (res: any) => {
        this.registrationForm.reset();
        this.submitted = false;
        console.log(res);
        alert('Registration Successful Please Login');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
        
        if (err.error && err.error.message === "Email already exists") {
          alert('Email already registered. Redirecting to login page...');
          this.router.navigate(['/login']);
        } else {
          alert('Something went wrong. Please try again later.');
        }
      }
    })
  }
 
}

