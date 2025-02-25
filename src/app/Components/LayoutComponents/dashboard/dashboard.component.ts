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
  userRole: string = '';
  menuItems: { label: string; Icon:string; link: string }[] = [];
  

  setMenu() {
    if (this.userRole === 'institute') {
      this.menuItems = [
        { label: 'Staff', Icon: 'bi-person-badge', link: '/layout/staff' },
        { label: 'Courses', Icon: 'bi-book', link: '/layout/courses' }
      ];
    } else if (this.userRole === 'company') {
      this.menuItems = [
        { label: 'Employees', Icon: 'fas fa-user-tie fa-2x', link: '/layout/employees' },
        { label: 'Assets', Icon: 'fas fa-boxes fa-2x', link: '/layout/assets' },
        { label: 'Enrolled Students' ,Icon: 'fa fa-graduation-cap fa-2x' , link: '/layout/enrollStudentList'}
      ];
    } else if (this.userRole === 'inspector') {
      this.menuItems = [
        { label: 'Own Courses', Icon: 'bi-journal-code', link: '/layout/own-courses' }
      ];
    }
  }
  

  toggleSidebar() {
    this.isClosed = !this.isClosed;
  }

}
