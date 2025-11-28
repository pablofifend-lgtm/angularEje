import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendidaComponentTs } from './extendida.component.ts';

describe('ExtendidaComponentTs', () => {
  let component: ExtendidaComponentTs;
  let fixture: ComponentFixture<ExtendidaComponentTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtendidaComponentTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendidaComponentTs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
