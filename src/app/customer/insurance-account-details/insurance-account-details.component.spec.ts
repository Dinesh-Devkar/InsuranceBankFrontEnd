import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceAccountDetailsComponent } from './insurance-account-details.component';

describe('InsuranceAccountDetailsComponent', () => {
  let component: InsuranceAccountDetailsComponent;
  let fixture: ComponentFixture<InsuranceAccountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceAccountDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
