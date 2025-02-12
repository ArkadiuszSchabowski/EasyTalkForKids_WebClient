import { TestBed } from '@angular/core/testing';

import { LandService } from './_land.service';

describe('LandService', () => {
  let service: LandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
