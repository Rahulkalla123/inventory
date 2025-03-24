import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AllAPIService } from '../../../../service/all-api.service';
import { CommonModule } from '@angular/common';
import { StoreResponceService } from '../../../../service/store-responce.service';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule,RouterLink,MatMenuModule,MatButtonModule],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.scss'
})
export class ItemDetailsComponent {
  item: any = null;
  items: any = [];

  private route = inject(ActivatedRoute);
  private router = inject(Router)
  private service = inject(AllAPIService);
  private itemService = inject(StoreResponceService);
  @ViewChild('fileInput') fileInput!: ElementRef;

  ngOnInit(): void {
    this.loadItemsData();
    this.getItemDetails();
  }

  loadItemsData() {
    this.items = this.itemService.getItemsData();
    if (!this.items || this.items.length === 0) {
      console.log('Items not found in memory. Fetching again...');
      this.service.addItem().subscribe({
        next: (data: any) => {
          this.items = data.items;
          this.itemService.setItemsData(data.items);
        },
        error: (error) => {
          console.log('Error fetching items list', error);
        }
      });
    }
  }

  getItemDetails(itemId?: string) {
    const id = itemId || this.route.snapshot.paramMap.get('id');
    this.service.getItemById(id).subscribe({
      next: (data: any) => {
        this.item = data;
        console.log('Item Details:', data);
      },
      error: (error) => {
        console.log('Error fetching item details', error);
      }
    });
  }

  loadItemFromList(itemId: number) {
    this.getItemDetails(itemId.toString());
    this.router.navigate(['layout/item-details', itemId]);
  }

  // File upload logic
  onFileSelected(event: any) {
    const files = event.target.files;
    if (files.length > 15) {
      alert('You can only upload up to 15 images.');
    } else {
      console.log('Selected files:', files);
    }
  }

  onFileDrop(event: any) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    this.onFileSelected({ target: { files } });
  }

  onDragOver(event: any) {
    event.preventDefault();
  }

  onDragLeave(event: any) {
    event.preventDefault();
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  deleteItem(itemId: number) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.service.deleteItem(itemId).subscribe({
        next: () => {
          alert('Item deleted successfully');
          this.loadItemsData();
          this.router.navigate(['/layout/item']);
        },
        error: (error) => {
          console.error('Error deleting item:', error);
        },
      });
    }
  }
}
