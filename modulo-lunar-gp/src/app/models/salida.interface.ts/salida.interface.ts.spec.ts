import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaInterfaceTs } from './salida.interface.ts';

describe('SalidaInterfaceTs', () => {
  let component: SalidaInterfaceTs;
  let fixture: ComponentFixture<SalidaInterfaceTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalidaInterfaceTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalidaInterfaceTs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
