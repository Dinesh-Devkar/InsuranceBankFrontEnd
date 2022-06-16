import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceAccountComponent } from './insurance-account.component';

describe('InsuranceAccountComponent', () => {
  let component: InsuranceAccountComponent;
  let fixture: ComponentFixture<InsuranceAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
