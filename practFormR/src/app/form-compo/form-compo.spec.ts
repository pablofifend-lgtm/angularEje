import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompo } from './form-compo';

describe('FormCompo', () => {
  let component: FormCompo;
  let fixture: ComponentFixture<FormCompo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCompo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCompo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
