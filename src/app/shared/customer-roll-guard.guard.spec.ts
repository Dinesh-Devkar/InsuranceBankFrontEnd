import { TestBed } from '@angular/core/testing';

import { CustomerRollGuardGuard } from './customer-roll-guard.guard';

describe('CustomerRollGuardGuard', () => {
  let guard: CustomerRollGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CustomerRollGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
