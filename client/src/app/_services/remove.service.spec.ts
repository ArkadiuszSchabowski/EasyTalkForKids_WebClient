import { TestBed } from '@angular/core/testing';

import { RemoveService } from './remove.service';
import { HttpClientModule } from '@angular/common/http';

describe('RemoveService', () => {
  let service: RemoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(RemoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
