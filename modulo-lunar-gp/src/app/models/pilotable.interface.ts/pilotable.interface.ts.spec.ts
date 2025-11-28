import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotableInterfaceTs } from './pilotable.interface.ts';

describe('PilotableInterfaceTs', () => {
  let component: PilotableInterfaceTs;
  let fixture: ComponentFixture<PilotableInterfaceTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PilotableInterfaceTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotableInterfaceTs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
