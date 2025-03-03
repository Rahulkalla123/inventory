import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-main.component.html',
  styleUrl: './footer-main.component.scss'
})
export class FooterMainComponent {
  currentSlide = 0;
  slides = [
    {
      image: 'assets/footermainslideone.png',
      title: 'Manage your inventory on the go!',
      description: 'Experience the ease of managing your inventory with the Zoho Inventory mobile app for Android & iOS.'
    },
    {
      image: 'assets/footermainslidertwo.png',
      title: 'New to inventory management?',
      description: 'We\'ve got you covered! Our guides will help you level up your business all the way, from start to finish.'
    }
  ];

  prevSlide() {
    this.currentSlide = (this.currentSlide === 0) ? this.slides.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
}
