import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AllAPIService } from '../../../service/all-api.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterLink,MatTooltipModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  isClosed = false;
  activeLink = 'Courses';
  businessType: string | null = '';
  dropdownOpen: string | null = null;

  apiService = inject(AllAPIService)

  toggleSidebar() {
    this.dropdownOpen = null; 
    this.isClosed = !this.isClosed;
  }
  setActiveLink(link: string) {
    this.activeLink = link;
    // this.dropdownOpen = null; 
  }

  toggleDropdown(dropdown: string) {
    this.dropdownOpen = this.dropdownOpen === dropdown ? null : dropdown;
    if(this.isClosed === false) {
        this.isClosed = this.isClosed
    }else{
      this.isClosed = !this.isClosed
    }
  }
  ngOnInit(): void {
    this.businessType = this.apiService.getBusinessType();
  }
}
