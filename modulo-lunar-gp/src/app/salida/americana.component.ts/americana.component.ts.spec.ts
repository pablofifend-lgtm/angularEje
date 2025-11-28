import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericanaComponentTs } from './americana.component.ts';

describe('AmericanaComponentTs', () => {
  let component: AmericanaComponentTs;
  let fixture: ComponentFixture<AmericanaComponentTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmericanaComponentTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmericanaComponentTs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
