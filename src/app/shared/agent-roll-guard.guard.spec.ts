import { TestBed } from '@angular/core/testing';

import { AgentRollGuardGuard } from './agent-roll-guard.guard';

describe('AgentRollGuardGuard', () => {
  let guard: AgentRollGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AgentRollGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
