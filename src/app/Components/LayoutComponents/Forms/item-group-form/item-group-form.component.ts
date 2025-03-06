import { Component } from '@angular/core';

@Component({
  selector: 'app-item-group-form',
  standalone: true,
  imports: [],
  templateUrl: './item-group-form.component.html',
  styleUrl: './item-group-form.component.scss'
})
export class ItemGroupFormComponent {
  onFileSelected(event: any) {
    const files = event.target.files;
    if (files.length > 15) {
      alert("You can only upload up to 15 images.");
    } else {
      console.log("Selected files:", files);
    }
  }
}
