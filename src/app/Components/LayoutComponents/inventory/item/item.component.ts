import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AllAPIService } from '../../../../service/all-api.service';

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

  private service = inject(AllAPIService);
  
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
    this.getItems();
  }

  getItems() {
    this.service.addItem().subscribe({
      next: (data : any) => {
          this.itemsData = data;
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

}
