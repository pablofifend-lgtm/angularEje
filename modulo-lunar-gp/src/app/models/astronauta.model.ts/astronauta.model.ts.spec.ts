import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronautaModelTs } from './astronauta.model.ts';

describe('AstronautaModelTs', () => {
  let component: AstronautaModelTs;
  let fixture: ComponentFixture<AstronautaModelTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstronautaModelTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstronautaModelTs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
