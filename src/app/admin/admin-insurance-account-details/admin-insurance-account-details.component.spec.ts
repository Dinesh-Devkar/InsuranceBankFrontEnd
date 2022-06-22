import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInsuranceAccountDetailsComponent } from './admin-insurance-account-details.component';

describe('AdminInsuranceAccountDetailsComponent', () => {
  let component: AdminInsuranceAccountDetailsComponent;
  let fixture: ComponentFixture<AdminInsuranceAccountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInsuranceAccountDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInsuranceAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
