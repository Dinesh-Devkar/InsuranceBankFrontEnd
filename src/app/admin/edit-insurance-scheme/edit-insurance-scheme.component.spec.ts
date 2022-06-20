import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInsuranceSchemeComponent } from './edit-insurance-scheme.component';

describe('EditInsuranceSchemeComponent', () => {
  let component: EditInsuranceSchemeComponent;
  let fixture: ComponentFixture<EditInsuranceSchemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInsuranceSchemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInsuranceSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
