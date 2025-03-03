import { Component } from '@angular/core';
import { HoverListDirective } from '../../../../CoustomDirectives/hover-list.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-partner-page',
  standalone: true,
  imports: [HoverListDirective,RouterLink],
  templateUrl: './partner-page.component.html',
  styleUrl: './partner-page.component.scss'
})
export class PartnerPageComponent {

}
