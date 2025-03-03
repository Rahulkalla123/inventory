import { TestBed } from '@angular/core/testing';

import { AllAPIService } from './all-api.service';

describe('AllAPIService', () => {
  let service: AllAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
