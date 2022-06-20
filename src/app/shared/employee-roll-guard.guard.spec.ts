import { TestBed } from '@angular/core/testing';

import { EmployeeRollGuardGuard } from './employee-roll-guard.guard';

describe('EmployeeRollGuardGuard', () => {
  let guard: EmployeeRollGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployeeRollGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
