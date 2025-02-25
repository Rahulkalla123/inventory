import { Component } from '@angular/core';
import { SubHeaderComponent } from '../../headers/sub-header/sub-header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [SubHeaderComponent,RouterLink],
  templateUrl: './management.component.html',
  styleUrl: './management.component.scss'
})
export class ManagementComponent {

}
