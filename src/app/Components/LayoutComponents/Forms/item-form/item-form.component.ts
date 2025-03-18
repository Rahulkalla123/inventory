import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AllAPIService } from '../../../../service/all-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [ RouterLink,FormsModule],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.scss'
})
export class ItemFormComponent {

  item = {
    name: '',
    description: '',
    SKU: 0,
    quantity: 0,
    price: 0,
    type: '',  // "service" or "goods"
    unit: 'Box'   // "kg", "cm", etc.
  };

  service = inject(AllAPIService);
  route = inject(Router);

  onFileSelected(event: any) {
    const files = event.target.files;
    if (files.length > 15) {
      alert("You can only upload up to 15 images.");
    } else {
      console.log("Selected files:", files);
    }
  }

  addItem() {
    debugger
    this.service.addItems(this.item).subscribe({
      next: (data: any) => {
        console.log('itemData', data);
        alert('Item Added Successfully');
        this.route.navigate(['/layout/item']);
      },
      error: (error) => {
        console.log('postItemAPIError', error);
      }
    })
  }
  
}
