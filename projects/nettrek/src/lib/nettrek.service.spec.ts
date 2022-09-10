import { TestBed } from '@angular/core/testing';

import { NettrekService } from './nettrek.service';

describe('NettrekService', () => {
  let service: NettrekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NettrekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
