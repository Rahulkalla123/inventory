import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { SubHeaderComponent } from "../sub-header/sub-header.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent, RouterLink],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent {
  isScrolled = false;
  dropdownOpen = false;

  toggleDropdown(event: Event) {
    event.preventDefault();
    this.dropdownOpen = !this.dropdownOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 100;
  }
 
}
