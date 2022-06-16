import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPolicyPaymentComponent } from './view-policy-payment.component';

describe('ViewPolicyPaymentComponent', () => {
  let component: ViewPolicyPaymentComponent;
  let fixture: ComponentFixture<ViewPolicyPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPolicyPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPolicyPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
