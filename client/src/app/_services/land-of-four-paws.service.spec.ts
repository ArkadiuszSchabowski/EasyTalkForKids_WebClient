import { TestBed } from '@angular/core/testing';

import { LandOfFourPawsService } from './land-of-four-paws.service';

describe('LandOfFourPawsService', () => {
  let service: LandOfFourPawsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandOfFourPawsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
