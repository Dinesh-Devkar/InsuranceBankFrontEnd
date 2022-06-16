import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentPolicyPaymentComponent } from './agent-policy-payment.component';

describe('AgentPolicyPaymentComponent', () => {
  let component: AgentPolicyPaymentComponent;
  let fixture: ComponentFixture<AgentPolicyPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentPolicyPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentPolicyPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
