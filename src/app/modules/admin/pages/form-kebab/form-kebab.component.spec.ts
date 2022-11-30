import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormKebabComponent } from './form-kebab.component';

describe('FormKebabComponent', () => {
  let component: FormKebabComponent;
  let fixture: ComponentFixture<FormKebabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormKebabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormKebabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
