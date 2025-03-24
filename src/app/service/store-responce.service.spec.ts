import { TestBed } from '@angular/core/testing';

import { StoreResponceService } from './store-responce.service';

describe('StoreResponceService', () => {
  let service: StoreResponceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreResponceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
