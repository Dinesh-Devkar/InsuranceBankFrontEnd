import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentCommisionClaimComponent } from './agent-commision-claim.component';

describe('AgentCommisionClaimComponent', () => {
  let component: AgentCommisionClaimComponent;
  let fixture: ComponentFixture<AgentCommisionClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentCommisionClaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentCommisionClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
