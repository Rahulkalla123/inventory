import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGroupFormComponent } from './item-group-form.component';

describe('ItemGroupFormComponent', () => {
  let component: ItemGroupFormComponent;
  let fixture: ComponentFixture<ItemGroupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemGroupFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
