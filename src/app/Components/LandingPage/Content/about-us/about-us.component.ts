import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent implements AfterViewInit {
  testimonials = [
    {
      text: 'Zoho Inventory is one of the most easy to implement inventory management solution we have come across, with frequent updates that add more features with each iteration.',
      name: 'Ashish Verma',
      company: 'Operations & Logistics Manager, BOHECO',
      bgColor: 'rgb(255, 246, 230)',
      content: 'Quick product updates',
    },
    {
      text: 'The Zoho Inventory app has been really helpful in tracking the movement of key SKUs and the team has been very kind in providing us with solutions to our queries.',
      name: 'Team OYO Homes',
      company: 'OYO Homes',
      bgColor: 'rgb(230, 248, 243)',
      content: 'Active support team',
    },
    {
      text: "Zoho Inventory is an awesome software. It's automation feature is really nice. Most of the daily operations can be managed with the use of different APIs.",
      name: 'Shubham Chopra',
      company: 'Owner, Chopra Lighthouse',
      bgColor: 'rgb(230, 243, 248)',
      content: 'Automations via API',
    },
    {
      text: 'We manage all our inventory, sales, and purchases using Zoho Inventory and Zoho Books. They are easy to learn, easy to apply, and the support team is very helpful. We like Zoho very much!.',
      name: 'Venkateswara Rao',
      company: 'Owner, Chopra Lighthouse',
      bgColor: 'rgb(250, 230, 244)',
      content: 'Automations via API',
    },
  ];

  activeContent: string = this.testimonials[0].content;
  animateContent = true; // Set true initially so content is visible

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      const carousel = this.renderer.selectRootElement(
        '#carouselExampleSlidesOnly',
        true
      );
      carousel.addEventListener('slid.bs.carousel', (event: any) => {
        this.animateContent = false; // Reset animation
        setTimeout(() => {
          this.activeContent = this.testimonials[event.to].content;
          this.animateContent = true; // Trigger animation after content change
        }, 100);
      });
    }
  }
}
