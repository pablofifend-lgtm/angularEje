import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaReducida } from './entrada-reducida';

describe('EntradaReducida', () => {
  let component: EntradaReducida;
  let fixture: ComponentFixture<EntradaReducida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntradaReducida]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradaReducida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
