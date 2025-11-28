import { TestBed } from '@angular/core/testing';

import { SalidaEuropeaServiceTs } from './salida-europea.service.ts';

describe('SalidaEuropeaServiceTs', () => {
  let service: SalidaEuropeaServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalidaEuropeaServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
