import { TestBed } from '@angular/core/testing';

import { LandOfCatTalesService } from './land-of-cat-tales.service';

describe('LandOfCatTalesService', () => {
  let service: LandOfCatTalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandOfCatTalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
