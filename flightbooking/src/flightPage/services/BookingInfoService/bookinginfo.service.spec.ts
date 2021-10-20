import { TestBed } from '@angular/core/testing';

import { BookingInfoService } from './bookinginfo.service';

describe('BookingInfoService', () => {
  let service: BookingInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
