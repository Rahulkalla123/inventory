import { Component } from '@angular/core';
import { HoverListDirective } from '../../../../CoustomDirectives/hover-list.directive';

@Component({
  selector: 'app-partner-page',
  standalone: true,
  imports: [HoverListDirective],
  templateUrl: './partner-page.component.html',
  styleUrl: './partner-page.component.scss'
})
export class PartnerPageComponent {

}
