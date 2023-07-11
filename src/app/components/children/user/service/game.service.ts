import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
let rightAnswers: number = 0;
let hearts: number = 3;

export const heartsCount$: BehaviorSubject<number> = new BehaviorSubject(3);
export const rightAnswersCount$: BehaviorSubject<number> = new BehaviorSubject(0);
export let gameOver: boolean = false;

@Injectable()
export class GameService implements OnDestroy{
  constructor(private _router: Router) {

  }

  public rightAnswer(): void{
    rightAnswers ++;
    rightAnswersCount$.next(rightAnswers);
  }

  public wrongAnswer(): void{
    hearts --;
    heartsCount$.next(hearts);
  }

  public checkGame(): void {
    if (hearts === 0) {
      gameOver = true;
      this._router.navigate(['user/defeat']);
    }

    else if (rightAnswers === 3) {
      gameOver = true;
      this._router.navigate(['user/victory']);
    }
  }

  public ngOnDestroy(): void {
    rightAnswers = 0;
    hearts = 3;
    rightAnswersCount$.next(0);
    heartsCount$.next(3);
    gameOver = false;
  }
}
