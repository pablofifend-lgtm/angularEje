import { TestBed } from '@angular/core/testing';

import { ValidadorSedimentarioServiceTs } from './validador-sedimentario.service.ts';

describe('ValidadorSedimentarioServiceTs', () => {
  let service: ValidadorSedimentarioServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidadorSedimentarioServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
