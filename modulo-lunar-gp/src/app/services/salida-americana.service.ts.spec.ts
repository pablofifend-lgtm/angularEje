import { TestBed } from '@angular/core/testing';

import { SalidaAmericanaServiceTs } from './salida-americana.service.ts';

describe('SalidaAmericanaServiceTs', () => {
  let service: SalidaAmericanaServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalidaAmericanaServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
