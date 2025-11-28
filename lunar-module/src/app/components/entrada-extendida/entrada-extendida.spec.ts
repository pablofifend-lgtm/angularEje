import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaExtendida } from './entrada-extendida';

describe('EntradaExtendida', () => {
  let component: EntradaExtendida;
  let fixture: ComponentFixture<EntradaExtendida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntradaExtendida]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradaExtendida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
