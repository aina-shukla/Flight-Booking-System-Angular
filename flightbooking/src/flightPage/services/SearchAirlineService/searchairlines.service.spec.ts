import { TestBed } from '@angular/core/testing';

import { SearchairlinesService } from './searchairlines.service';

describe('SearchairlinesService', () => {
  let service: SearchairlinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchairlinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
