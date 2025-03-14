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
  private router = inject(Router);

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  setActive(index: number) {
    this.activeIndex = index;
  }

  ngOnInit(): void {
    this.GetUserDetails();
  }

  GetUserDetails() {
    // Check if running in browser before accessing localStorage
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('AccessToken');
      if (!token) {
        console.log("No token found. Skipping user details API call.");
        return;
      }
      this.service.getUserDetails().subscribe({
        next: (res) => {
          this.userDetails = res.user;
          console.log(this.userDetails);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('getUserDetails completed');
        }
      });
    } else {
      console.warn("localStorage is not available on the server.");
    }
  }
}
