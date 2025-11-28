import { TestBed } from '@angular/core/testing';

import { EntradaReducidaServiceTs } from './entrada-reducida.service.ts';

describe('EntradaReducidaServiceTs', () => {
  let service: EntradaReducidaServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntradaReducidaServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
