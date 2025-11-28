import { TestBed } from '@angular/core/testing';

import { ValidadorMetamorfoServiceTs } from './validador-metamorfo.service.ts';

describe('ValidadorMetamorfoServiceTs', () => {
  let service: ValidadorMetamorfoServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidadorMetamorfoServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
