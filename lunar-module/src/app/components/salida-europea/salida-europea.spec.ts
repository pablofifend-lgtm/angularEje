import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaEuropea } from './salida-europea';

describe('SalidaEuropea', () => {
  let component: SalidaEuropea;
  let fixture: ComponentFixture<SalidaEuropea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalidaEuropea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalidaEuropea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
