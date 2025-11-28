import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reducido } from './reducido';

describe('Reducido', () => {
  let component: Reducido;
  let fixture: ComponentFixture<Reducido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reducido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reducido);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
