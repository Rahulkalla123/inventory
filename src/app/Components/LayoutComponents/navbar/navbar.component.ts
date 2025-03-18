import { Component } from '@angular/core';
import { AllAPIService } from '../../../service/all-api.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  userDetails: any = {};

  constructor(private service: AllAPIService) {}

  ngOnInit(): void {
    this.service.userDetails$.subscribe(user => {
      if (user) {
        this.userDetails = user;
        console.log("User Details in Navbar:", this.userDetails.name);
      }
    });
  }
}
