import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInsuranceSchemeComponent } from './add-insurance-scheme.component';

describe('AddInsuranceSchemeComponent', () => {
  let component: AddInsuranceSchemeComponent;
  let fixture: ComponentFixture<AddInsuranceSchemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInsuranceSchemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInsuranceSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
