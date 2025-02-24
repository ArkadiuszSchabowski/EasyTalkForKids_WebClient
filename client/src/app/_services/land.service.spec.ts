import { TestBed } from '@angular/core/testing';

import { LandService } from './land.service';
import { HttpClientModule } from '@angular/common/http';

describe('LandService', () => {
  let service: LandService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(LandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
