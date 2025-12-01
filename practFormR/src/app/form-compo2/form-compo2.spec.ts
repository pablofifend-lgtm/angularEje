import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompo2 } from './form-compo2';

describe('FormCompo2', () => {
  let component: FormCompo2;
  let fixture: ComponentFixture<FormCompo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCompo2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCompo2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
