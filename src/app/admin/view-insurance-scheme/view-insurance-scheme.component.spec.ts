import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInsuranceSchemeComponent } from './view-insurance-scheme.component';

describe('ViewInsuranceSchemeComponent', () => {
  let component: ViewInsuranceSchemeComponent;
  let fixture: ComponentFixture<ViewInsuranceSchemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInsuranceSchemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInsuranceSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
