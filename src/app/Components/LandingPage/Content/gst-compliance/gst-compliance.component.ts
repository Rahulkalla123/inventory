import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {  AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-gst-compliance',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './gst-compliance.component.html',
  styleUrl: './gst-compliance.component.scss',
  animations: [
    trigger('slideImage', [
      state('hidden', style({ transform: 'translateX(-100%)', opacity: 0 })),
      state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('hidden => visible', animate('1s ease-in-out')),
    ]),
    trigger('slideContent', [
      state('hidden', style({ transform: 'translateX(100%)', opacity: 0 })),
      state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('hidden => visible', animate('1s ease-in-out')),
    ]),
  ],
})
export class GstComplianceComponent implements AfterViewInit{
  tabs = [
    { name: 'GSTIN' },
    { name: 'HSN/SAC CODES' },
    { name: 'INVOICES' },
    { name: 'TAXES' },
    { name: 'E-WAY BILLS' },
    { name: 'DELIVERY CHALLAN' }
  ];

  tabContents = [
    {
      name: 'GSTIN',
      image: '../../../../../assets/gstScreen1.png',
      title: 'Save GSTINs',
      description: 'Keep a central record of the GSTIN for the registered businesses and save time from manually entering it every time.',
      points: [
        'Save GSTIN of customers and vendors',
        'GSTIN gets added to documents automatically',
        'Documents like invoices, bills, sales, and purchase orders'
      ]
    },
    {
      name: 'HSN/SAC CODES',
      image: 'assets/gstScreen1.png',
      title: 'Add HSN or SAC codes',
      description: 'You can add your HSN or SAC code for the items you sell or service you offer and stay compliant with the GST norms.',
      points: [
        ' Add HSN or SAC when you add an item or service',
        'Select the item while creating an invoice or an order',
        'Use our free HSN/SAC code finder tool'
      ]
    },
    {
      name: 'INVOICES',
      image: 'assets/gstScreen1.png',
      title: 'Generate GST-compliant invoices',
      description: 'Create invoices which will help you to get paid on time and also be ready for the GST requirements.',
      points: [
        'Convert sales order to invoices in easy steps',
        'Designed to meet the 16 mandatory requirements issued by the CBEC',
      ]
    },
    {
      name: 'TAXES',
      image: 'assets/gstScreen1.png',
      title: 'Automate tax calculation',
      description: 'When you prepare a sales order, the CGST, IGST or SGST rates get calculated automatically, saving you time and manual calculations.',
      points: [
        'Select the tax preference',
        'Mention the tax rate',
        'The applicable taxes will get calculated automatically'
      ]
    },
    {
      name: 'E-WAY BILLS',
      image: 'assets/gstScreen1.png',
      title: 'Create e-Way bills',
      description: 'You can create an e-Way bill with all the information about the transport company while you create an invoice',
      points: [
        'You can also create it for credit note and delivery challan',
        'See the step-by-step e-Way bill creation process.',
      ]
    },
    {
      name: 'DELIVERY CHALLAN',
      image: 'assets/gstScreen1.png',
      title: 'Issue Delivery Challan',
      description: 'Delivery challans created in Zoho Inventory follow all the GST format requirements, and the item details are auto-filled automatically during creation.',
      points: [
        'Select the customer name',
        'Decide the challan number and type',
        'Select the item details'
      ]
    }
  ];

  activeTab = 0;
  activeContent = this.tabContents[0];
  animateState = 'hidden';

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private cdr: ChangeDetectorRef) {}
  @ViewChild('gstComplianceSection') gstComplianceSection!: ElementRef;


  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateState = 'visible';
            this.cdr.detectChanges(); 
            observer.unobserve(entry.target); 
          }
        });
      }, { threshold: 0.3 }); 
  
      observer.observe(this.gstComplianceSection.nativeElement);
    }
  }

  selectTab(index: number) {
    this.animateState = 'hidden'; 
    setTimeout(() => {
      this.activeTab = index;
      this.activeContent = this.tabContents[index];
      this.animateState = 'visible'; 
    }, 200); 
  }
}
