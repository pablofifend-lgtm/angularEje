import { TestBed } from '@angular/core/testing';

import { Roca } from './roca';

describe('Roca', () => {
  let service: Roca;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Roca);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
