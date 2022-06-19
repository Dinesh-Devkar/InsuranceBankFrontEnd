import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentCommisionWithdrawlComponent } from './agent-commision-withdrawl.component';

describe('AgentCommisionWithdrawlComponent', () => {
  let component: AgentCommisionWithdrawlComponent;
  let fixture: ComponentFixture<AgentCommisionWithdrawlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentCommisionWithdrawlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentCommisionWithdrawlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
