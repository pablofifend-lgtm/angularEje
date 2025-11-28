import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaAmericana } from './salida-americana';

describe('SalidaAmericana', () => {
  let component: SalidaAmericana;
  let fixture: ComponentFixture<SalidaAmericana>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalidaAmericana]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalidaAmericana);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
