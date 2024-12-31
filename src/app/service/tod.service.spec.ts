import { TestBed } from '@angular/core/testing';

import { TodService } from './tod.service';

describe('TodService', () => {
  let service: TodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
