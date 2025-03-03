import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterMainComponent } from "../footer-main/footer-main.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { DashboardMainComponent } from "../dashboard-main/dashboard-main.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-home-main',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, NavbarComponent, FooterMainComponent],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss'
})
export class HomeMainComponent {
  isNavFixed = false;  
  lastScrollTop = 0;  
  activeIndex = 0;


  setActive(index: number) {
    this.activeIndex = index;
  }

  
}
