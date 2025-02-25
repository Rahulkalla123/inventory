import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverList]',
  standalone: true
})
export class HoverListDirective implements OnInit {

  private dropdownMenu: HTMLElement | null = null;
  private arrowIcon: HTMLElement | null = null;
  private timer: any;

  constructor(private element: ElementRef, private renderer: Renderer2,@Inject(PLATFORM_ID) private platformId: Object
) {}

  ngAfterViewInit() {
    this.dropdownMenu = this.element.nativeElement.nextElementSibling;
    this.arrowIcon = this.element.nativeElement.querySelector('i');

    if (this.dropdownMenu) {
      this.renderer.listen(this.dropdownMenu, 'mouseenter', () => {
        clearTimeout(this.timer);
      });

      this.renderer.listen(this.dropdownMenu, 'mouseleave', () => {
        this.closeDropdown();
      });
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    clearTimeout(this.timer);
    if (this.dropdownMenu) {
      this.renderer.addClass(this.dropdownMenu, 'show');
      this.renderer.removeClass(this.dropdownMenu, 'hide'); // Prevent flickering
    }
    if (this.arrowIcon) {
      this.renderer.setStyle(this.arrowIcon, 'transform', 'rotate(180deg)');
      this.renderer.setStyle(this.arrowIcon, 'transition', 'transform 0.3s ease');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.closeDropdown();
  }

  private closeDropdown() {
    this.timer = setTimeout(() => {
      if (this.dropdownMenu) {
        this.renderer.removeClass(this.dropdownMenu, 'show');
        this.renderer.addClass(this.dropdownMenu, 'hide');
      }
      if (this.arrowIcon) {
        this.renderer.setStyle(this.arrowIcon, 'transform', 'rotate(0deg)');
      }
    }, 300);
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.renderer.addClass(this.element.nativeElement, 'animate');
              observer.unobserve(entry.target); 
            }
          });
        }, { threshold: 1 });

        observer.observe(this.element.nativeElement);
      } else {
        this.renderer.addClass(this.element.nativeElement, 'animate');
      }
    }
  }
}
