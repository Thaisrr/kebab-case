import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardKebabComponent } from './dashboard-kebab.component';

describe('DashboardKebabComponent', () => {
  let component: DashboardKebabComponent;
  let fixture: ComponentFixture<DashboardKebabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardKebabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardKebabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
