import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropeaComponentTs } from './europea.component.ts';

describe('EuropeaComponentTs', () => {
  let component: EuropeaComponentTs;
  let fixture: ComponentFixture<EuropeaComponentTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EuropeaComponentTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EuropeaComponentTs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
