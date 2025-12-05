import { TestBed } from '@angular/core/testing';

import { ServicioNasa } from './servicio-nasa';

describe('ServicioNasa', () => {
  let service: ServicioNasa;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioNasa);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
