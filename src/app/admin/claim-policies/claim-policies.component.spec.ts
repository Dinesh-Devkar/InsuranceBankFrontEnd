import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimPoliciesComponent } from './claim-policies.component';

describe('ClaimPoliciesComponent', () => {
  let component: ClaimPoliciesComponent;
  let fixture: ComponentFixture<ClaimPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimPoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
