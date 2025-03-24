import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AllAPIService } from '../../../../service/all-api.service';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [ RouterLink,FormsModule,MatTooltipModule],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.scss'
})
export class ItemFormComponent implements OnInit{

  matTolltipMessage : string = "the item will be measured in terms of this unit (eg: kg,dozen)"
  
  item = {
    name: '',
    description: '',
    sku: 0,
    quantity: 0,
    price: 0,
    type: '',  // "service" or "goods"
    unit: 'Box',   // "kg", "cm", etc.
    Dimensions: "",
    Manufacturer: "",
    upc: "",
    EAN: "",
    Weight: "",
    Brand : "",
    MPN: "",
    ISBN: ""
  };

  itemId: any | null = null;
  service = inject(AllAPIService);
  route = inject(Router);
  activatedRoute = inject(ActivatedRoute);


  onFileSelected(event: any) {
    const files = event.target.files;
    if (files.length > 15) {
      alert("You can only upload up to 15 images.");
    } else {
      console.log("Selected files:", files);
    }
  }
  ngOnInit() {
    // Get Item ID from query params
    this.activatedRoute.queryParams.subscribe(params => {
      this.itemId = params['id'] ? +params['id'] : null;
      if (this.itemId) {
        this.loadItemDetails(this.itemId);
      }
    });
  }

  loadItemDetails(id: string) {
    this.service.getItemById(id).subscribe({
      next: (data: any) => {
        this.item = data; // Prefill the form with item data
      },
      error: (error) => {
        console.log('Error loading item details:', error);
      }
    });
  }


  addItem() {
     if (this.itemId) {
      debugger
      // Update Item if ID exists
      this.service.updateItem(this.itemId, this.item).subscribe({
        next: (data: any) => {
          console.log('Updated Item:', data);
          alert('Item Updated Successfully');
          this.route.navigate(['/layout/item']);
        },
        error: (error) => {
          console.log('updateItemAPIError', error);
        }
      });
    } else {
      // Add New Item if no ID
      this.service.addItems(this.item).subscribe({
        next: (data: any) => {
          console.log('itemData', data);
          alert('Item Added Successfully');
          this.route.navigate(['/layout/item']);
        },
        error: (error) => {
          console.log('postItemAPIError', error);
        }
      });
    }
  }
  
}
