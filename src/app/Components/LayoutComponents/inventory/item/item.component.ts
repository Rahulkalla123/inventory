import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AllAPIService } from '../../../../service/all-api.service';
import { StoreResponceService } from '../../../../service/store-responce.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit{

  table :boolean = true;
  card : boolean = false;
 
  itemsData : any = [];
  selectedItem: any = null;


  private service = inject(AllAPIService);
  private dataService = inject(StoreResponceService);
  private router = inject(Router);
  
  onFileSelected(event: any) {
    const files = event.target.files;
    if (files.length > 15) {
      alert("You can only upload up to 15 images.");
    } else {
      console.log("Selected files:", files);
    }
  }

  changeModeTable() {
   this.table = true;
   this.card = false;
  }

  changeModeCard() {
    this.table = false;
    this.card = true;
  }

  ngOnInit(): void {
    this.loadItemsData(); 
  }

  loadItemsData() {
    this.itemsData = this.dataService.getItemsData();
  
    if (!this.itemsData || this.itemsData.length === 0) {
      console.log('Data not found. Fetching again...');
      this.getItems();
    }
  }

  getItems() {
    this.service.addItem().subscribe({
      next: (data : any) => {
          this.itemsData = data.items;
          this.dataService.setItemsData(data.items);
          console.log('itemData',data);
      },
      error: (error) => {
        console.log('itemAPIError', error);
      },
      complete: () => {
        console.log('API call completed');
      }
    })
  }

  goToItemDetails(itemId: number) {
    this.router.navigate(['layout/item-details', itemId]);
  }

}
