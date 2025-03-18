import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FooterMainComponent } from "../footer-main/footer-main.component";
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { AllAPIService } from '../../../service/all-api.service';

@Component({
  selector: 'app-home-main',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, NavbarComponent, FooterMainComponent],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss'
})
export class HomeMainComponent implements OnInit {

  isNavFixed = false;
  lastScrollTop = 0;
  activeIndex = 0;
  userDetails: any = [];

  private service = inject(AllAPIService);

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  setActive(index: number) {
    this.activeIndex = index;
  }

  ngOnInit(): void {
    this.GetUserDetails();
  }

  GetUserDetails() {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('AccessToken');
      if (!token) {
        console.log("No token found. Skipping user details API call.");
        return;
      }
  
      // Check if user data is already available in BehaviorSubject
      const storedUser = this.service.getStoredUserDetails();
      if (storedUser) {
        this.userDetails = storedUser; // Use stored data
        console.log("Using stored user details:", this.userDetails);
      } else {
        // Only call API if user data is not available
        this.service.getUserDetails().subscribe({
          next: (res) => {
            this.userDetails = res.user;
            console.log("User Details Fetched:", this.userDetails);
          },
          error: (error) => {
            console.log("Error fetching user details:", error);
          }
        });
      }
    } else {
      console.warn("localStorage is not available on the server.");
    }
}
}
