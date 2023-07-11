import { TestBed } from '@angular/core/testing';

import { GameCompleteGuard } from './game-complete.guard';

describe('GameCompleteGuard', () => {
  let guard: GameCompleteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GameCompleteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
