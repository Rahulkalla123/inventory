import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-updates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-updates.component.html',
  styleUrl: './recent-updates.component.scss',
})
export class RecentUpdatesComponent {
  timelineData = [
    {
      date: '29 September 2023',
      title: 'Prevent Duplicate Payments',
      description: `In cases where your customers make invoice payments via ACH or direct debit, 
                    the transaction could remain in the Pending status for a long time. During this time, 
                    there's a chance for your customers to initiate another (duplicate) payment. 
                    To prevent this, go to Settings > Customer Portal and check the 
                    'Prevent Duplicate Payments' option.`,
      filled: true,
    },
    {
      date: '25 September 2023',
      title: 'Redirect URL After Saving a Payment Method',
      description: `You can now direct your customers to a specific URL after requesting their 
                    payment information. You can use it to direct customers to your own website, 
                    or even the Customer Portal.`,
      filled: false,
    },
    {
      date: '25 September 2023',
      title: 'Import Customers with Duplicate Names',
      description: `You can now import customers who have the same display name as the customers that already exist in your organization. To enable this, go to Settings > Preferences > Customers and select 'Add duplicates as new customers' while importing customers.`,
      filled: false,
    },
  ];
}
