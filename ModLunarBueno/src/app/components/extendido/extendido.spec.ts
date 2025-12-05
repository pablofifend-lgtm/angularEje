import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Extendido } from './extendido';

describe('Extendido', () => {
  let component: Extendido;
  let fixture: ComponentFixture<Extendido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Extendido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Extendido);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
