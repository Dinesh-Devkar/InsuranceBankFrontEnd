import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerClaimPoliciesComponent } from './customer-claim-policies.component';

describe('CustomerClaimPoliciesComponent', () => {
  let component: CustomerClaimPoliciesComponent;
  let fixture: ComponentFixture<CustomerClaimPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerClaimPoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerClaimPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
