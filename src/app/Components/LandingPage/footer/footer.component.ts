import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
apps = [
  {
    icon : 'assets/image.png',
    name : 'Books',
    description: 'Online Expense Reporting'
  },
  {
    icon : 'assets/image.png',
    name : 'Expense',
    description: 'Online Expense Reporting'
  },
  {
    icon : 'assets/image.png',
    name : 'Payroll',
    description: 'Online Payroll Software'
  },
  {
    icon : 'assets/image.png',
    name : 'Commerce',
    description: 'Ecommerce Software'
  },
  {
    icon : 'assets/image.png',
    name : 'Billing',
    description: 'End-to-End Billing Solution'
  },
  {
    icon : 'assets/image.png',
    name : 'Checkout',
    description: 'Online Payments Software'
  },
  {
    icon : 'assets/image.png',
    name : 'Invoice',
    description: '100% Free Invoicing Solution'
  },
  {
    icon : 'assets/image.png',
    name : 'Practice',
    description: 'Practice Management Software'
  },
]
}
