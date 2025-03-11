import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {
  activeIndex = 0;
  selectedTab: string = 'details'

  setActive(index: number,tabName:string) {
    this.activeIndex = index;
    this.selectedTab = tabName;
  }
}
