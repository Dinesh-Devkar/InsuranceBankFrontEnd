import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInsurancePlanComponent } from './view-insurance-plan.component';

describe('ViewInsurancePlanComponent', () => {
  let component: ViewInsurancePlanComponent;
  let fixture: ComponentFixture<ViewInsurancePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInsurancePlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInsurancePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
