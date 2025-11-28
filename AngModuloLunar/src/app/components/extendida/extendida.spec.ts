import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Extendida } from './extendida';

describe('Extendida', () => {
  let component: Extendida;
  let fixture: ComponentFixture<Extendida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Extendida]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Extendida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
