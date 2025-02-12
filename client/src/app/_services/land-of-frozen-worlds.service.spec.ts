import { TestBed } from '@angular/core/testing';

import { LandOfFrozenWorldsService } from './land-of-frozen-worlds.service';

describe('LandOfFrozenWorldsService', () => {
  let service: LandOfFrozenWorldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandOfFrozenWorldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
