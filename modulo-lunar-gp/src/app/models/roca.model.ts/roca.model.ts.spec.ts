import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocaModelTs } from './roca.model.ts';

describe('RocaModelTs', () => {
  let component: RocaModelTs;
  let fixture: ComponentFixture<RocaModelTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RocaModelTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RocaModelTs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
