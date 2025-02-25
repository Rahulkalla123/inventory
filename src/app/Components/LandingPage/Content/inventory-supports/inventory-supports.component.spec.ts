import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorySupportsComponent } from './inventory-supports.component';

describe('InventorySupportsComponent', () => {
  let component: InventorySupportsComponent;
  let fixture: ComponentFixture<InventorySupportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventorySupportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventorySupportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
