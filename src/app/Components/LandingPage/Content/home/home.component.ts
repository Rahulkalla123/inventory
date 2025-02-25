import { Component } from '@angular/core';
import { MainHeaderComponent } from "../../headers/main-header/main-header.component";
import { ManagementComponent } from "../management/management.component";
import { GstComplianceComponent } from "../gst-compliance/gst-compliance.component";
import { InventorySupportsComponent } from "../inventory-supports/inventory-supports.component";
import { InventoryIntegrationComponent } from "../inventory-integration/inventory-integration.component";
import { DownloadPageComponent } from "../download-page/download-page.component";
import { SubscriptionComponent } from "../subscription/subscription.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { PartnerPageComponent } from "../partner-page/partner-page.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainHeaderComponent, ManagementComponent, GstComplianceComponent, InventorySupportsComponent, InventoryIntegrationComponent, DownloadPageComponent, SubscriptionComponent, AboutUsComponent, PartnerPageComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
