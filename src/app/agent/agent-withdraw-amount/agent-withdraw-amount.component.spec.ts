import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentWithdrawAmountComponent } from './agent-withdraw-amount.component';

describe('AgentWithdrawAmountComponent', () => {
  let component: AgentWithdrawAmountComponent;
  let fixture: ComponentFixture<AgentWithdrawAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentWithdrawAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentWithdrawAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
