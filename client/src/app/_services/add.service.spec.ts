import { TestBed } from '@angular/core/testing';

import { AddService } from './add.service';
import { HttpClientModule } from '@angular/common/http';

describe('AddService', () => {
  let service: AddService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
