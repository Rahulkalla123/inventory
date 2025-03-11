import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router, RouterLink } from '@angular/router';
import { AllAPIService } from '../../../service/all-api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
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
  fb = inject(FormBuilder);
  authAPI = inject(AllAPIService)

  LoginForm! : FormGroup;
  submitted = false;

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.LoginForm = this.fb.group({
      Email      :['',[Validators.required,Validators.email,]],
      Password   :['',[Validators.required,Validators.minLength(6)]]
    })
  }

  get f() { return this.LoginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if(this.LoginForm.invalid) {
        return
    }

    this.authAPI.login(this.LoginForm.value).subscribe({
      next: (res: any) => {
        console.log(res);
        if(res.success) {
          localStorage.setItem('accessToken', res.accessToken);
          localStorage.setItem('refreshToken', res.refreshToken);
          this.router.navigate(['/layout']);
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
   }
}
