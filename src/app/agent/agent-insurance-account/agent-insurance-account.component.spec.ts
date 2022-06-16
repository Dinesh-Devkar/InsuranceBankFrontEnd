import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentInsuranceAccountComponent } from './agent-insurance-account.component';

describe('AgentInsuranceAccountComponent', () => {
  let component: AgentInsuranceAccountComponent;
  let fixture: ComponentFixture<AgentInsuranceAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentInsuranceAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentInsuranceAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
