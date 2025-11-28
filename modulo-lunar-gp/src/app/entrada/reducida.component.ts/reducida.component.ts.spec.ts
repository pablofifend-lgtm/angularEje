import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReducidaComponentTs } from './reducida.component.ts';

describe('ReducidaComponentTs', () => {
  let component: ReducidaComponentTs;
  let fixture: ComponentFixture<ReducidaComponentTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReducidaComponentTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReducidaComponentTs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
