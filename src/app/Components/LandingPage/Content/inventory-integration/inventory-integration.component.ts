import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-inventory-integration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventory-integration.component.html',
  styleUrl: './inventory-integration.component.scss'
})
export class InventoryIntegrationComponent implements AfterViewInit  {
  isBrowser: boolean;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.isBrowser) {
      this.checkScroll();
    }
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.checkScroll();
    }
  }

  checkScroll(): void {
    const icons = this.el.nativeElement.querySelectorAll('.icon.hidden');
    const windowHeight = window.innerHeight;

    icons.forEach((icon: HTMLElement) => {
      const positionFromTop = icon.getBoundingClientRect().top;

      if (positionFromTop - windowHeight < -50) {
        icon.classList.add('visible');
      }
    });
  }
}
