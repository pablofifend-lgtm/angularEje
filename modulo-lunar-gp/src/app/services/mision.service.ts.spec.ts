import { TestBed } from '@angular/core/testing';

import { MisionServiceTs } from './mision.service.ts';

describe('MisionServiceTs', () => {
  let service: MisionServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisionServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
