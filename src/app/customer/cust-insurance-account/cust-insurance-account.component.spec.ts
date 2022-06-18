import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustInsuranceAccountComponent } from './cust-insurance-account.component';

describe('CustInsuranceAccountComponent', () => {
  let component: CustInsuranceAccountComponent;
  let fixture: ComponentFixture<CustInsuranceAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustInsuranceAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustInsuranceAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
