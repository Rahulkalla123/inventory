import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  isClosed = false;
  activeLink = 'home';
  dropdownOpen: string | null = null;

  toggleSidebar() {
    this.dropdownOpen = null; 
    this.isClosed = !this.isClosed;
  }

  setActiveLink(link: string) {
    this.activeLink = link;
    this.dropdownOpen = null; 
  }

  toggleDropdown(dropdown: string) {
    this.dropdownOpen = this.dropdownOpen === dropdown ? null : dropdown;
    if(this.isClosed === false) {
        this.isClosed = this.isClosed
    }else{
      this.isClosed = !this.isClosed
    }
  }
}
