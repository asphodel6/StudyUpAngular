import { TestBed } from '@angular/core/testing';

import { LeaveGameGuard } from './leave-game.guard';

describe('LeaveGameGuard', () => {
  let guard: LeaveGameGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LeaveGameGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
