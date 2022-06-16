import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceSettingComponent } from './insurance-setting.component';

describe('InsuranceSettingComponent', () => {
  let component: InsuranceSettingComponent;
  let fixture: ComponentFixture<InsuranceSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
