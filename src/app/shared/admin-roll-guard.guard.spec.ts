import { TestBed } from '@angular/core/testing';

import { AdminRollGuardGuard } from './admin-roll-guard.guard';

describe('AdminRollGuardGuard', () => {
  let guard: AdminRollGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminRollGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
