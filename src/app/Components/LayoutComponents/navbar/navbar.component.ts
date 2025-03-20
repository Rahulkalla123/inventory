import { Component } from '@angular/core';
import { AllAPIService } from '../../../service/all-api.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  userDetails:any;


  ngOnInit() {
   this.userDetails = localStorage.getItem('companyName')
  }
}
