import { TestBed } from '@angular/core/testing';

import { ValidadorIgneoServiceTs } from './validador-igneo.service.ts';

describe('ValidadorIgneoServiceTs', () => {
  let service: ValidadorIgneoServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidadorIgneoServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
