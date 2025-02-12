import { TestBed } from '@angular/core/testing';

import { LandOfSunnyDreamsService } from './land-of-sunny-dreams.service';

describe('LandOfSunnyDreamsService', () => {
  let service: LandOfSunnyDreamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandOfSunnyDreamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
