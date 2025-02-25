import { Component } from '@angular/core';
import { HoverListDirective } from '../../../../CoustomDirectives/hover-list.directive';

@Component({
  selector: 'app-sub-header',
  standalone: true,
  imports: [HoverListDirective],
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.scss'
})
export class SubHeaderComponent {
  
}
