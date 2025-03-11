import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-adjustment-form',
  standalone: true,
  imports: [],
  templateUrl: './inventory-adjustment-form.component.html',
  styleUrl: './inventory-adjustment-form.component.scss',
})
export class InventoryAdjustmentFormComponent {

  referenceNumberStored: any;

  action(refenceNum: HTMLInputElement) {
    this.referenceNumberStored = refenceNum.value;
    console.log('referencevalue', this.referenceNumberStored);
  }
}
