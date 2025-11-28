import { TestBed } from '@angular/core/testing';

import { Serv1 } from './serv1';

describe('Serv1', () => {
  let service: Serv1;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serv1);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
