import { TestBed } from '@angular/core/testing';

import { RecargaServiceService } from './recarga-service.service';

describe('RecargaServiceService', () => {
  let service: RecargaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecargaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
