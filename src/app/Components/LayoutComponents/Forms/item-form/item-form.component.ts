import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.scss'
})
export class ItemFormComponent {
  onFileSelected(event: any) {
    const files = event.target.files;
    if (files.length > 15) {
      alert("You can only upload up to 15 images.");
    } else {
      console.log("Selected files:", files);
    }
  }
}
