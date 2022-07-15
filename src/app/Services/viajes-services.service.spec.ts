import { TestBed } from '@angular/core/testing';

import { ViajesServicesService } from './viajes-services.service';

describe('ViajesServicesService', () => {
  let service: ViajesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViajesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
