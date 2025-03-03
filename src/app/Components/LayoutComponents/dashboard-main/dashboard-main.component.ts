import { Component } from '@angular/core';
import { FooterMainComponent } from "../footer-main/footer-main.component";

@Component({
  selector: 'app-dashboard-main',
  standalone: true,
  imports: [FooterMainComponent],
  templateUrl: './dashboard-main.component.html',
  styleUrl: './dashboard-main.component.scss'
})
export class DashboardMainComponent {

}
