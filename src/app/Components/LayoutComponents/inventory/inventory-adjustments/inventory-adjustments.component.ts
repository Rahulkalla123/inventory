import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InventoryAdjustmentFormComponent } from "../../Forms/inventory-adjustment-form/inventory-adjustment-form.component";

@Component({
  selector: 'app-inventory-adjustments',
  standalone: true,
  imports: [RouterLink, InventoryAdjustmentFormComponent],
  templateUrl: './inventory-adjustments.component.html',
  styleUrl: './inventory-adjustments.component.scss'
})
export class InventoryAdjustmentsComponent {

}
