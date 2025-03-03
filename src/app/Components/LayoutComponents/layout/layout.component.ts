import { Component, EventEmitter, Output } from '@angular/core';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [DashboardComponent, RouterOutlet, NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  isClosed = false;
  
  @Output() toggle = new EventEmitter<boolean>();

  toggleSidebar() {
    this.isClosed = !this.isClosed;
    this.toggle.emit(this.isClosed); // Emit the sidebar state to LayoutComponent
  }
}
