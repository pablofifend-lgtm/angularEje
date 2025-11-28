import { TestBed } from '@angular/core/testing';

import { EntradaExtendidaServiceTs } from './entrada-extendida.service.ts';

describe('EntradaExtendidaServiceTs', () => {
  let service: EntradaExtendidaServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntradaExtendidaServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
