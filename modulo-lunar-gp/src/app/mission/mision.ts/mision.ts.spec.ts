import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisionTs } from './mision.ts';

describe('MisionTs', () => {
  let component: MisionTs;
  let fixture: ComponentFixture<MisionTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisionTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisionTs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
