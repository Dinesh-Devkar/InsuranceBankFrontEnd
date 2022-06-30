import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyClaimRequestsComponent } from './policy-claim-requests.component';

describe('PolicyClaimRequestsComponent', () => {
  let component: PolicyClaimRequestsComponent;
  let fixture: ComponentFixture<PolicyClaimRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyClaimRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyClaimRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
