import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisionControl } from './mision-control';

describe('MisionControl', () => {
  let component: MisionControl;
  let fixture: ComponentFixture<MisionControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisionControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisionControl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
