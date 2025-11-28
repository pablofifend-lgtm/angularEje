import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidableInterfaceTs } from './validable.interface.ts';

describe('ValidableInterfaceTs', () => {
  let component: ValidableInterfaceTs;
  let fixture: ComponentFixture<ValidableInterfaceTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidableInterfaceTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidableInterfaceTs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
