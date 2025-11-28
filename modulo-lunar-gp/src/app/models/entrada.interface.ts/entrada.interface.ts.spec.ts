import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaInterfaceTs } from './entrada.interface.ts';

describe('EntradaInterfaceTs', () => {
  let component: EntradaInterfaceTs;
  let fixture: ComponentFixture<EntradaInterfaceTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntradaInterfaceTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradaInterfaceTs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
