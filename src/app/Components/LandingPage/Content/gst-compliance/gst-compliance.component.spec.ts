import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstComplianceComponent } from './gst-compliance.component';

describe('GstComplianceComponent', () => {
  let component: GstComplianceComponent;
  let fixture: ComponentFixture<GstComplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GstComplianceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GstComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
