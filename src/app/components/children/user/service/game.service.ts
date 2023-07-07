import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
let rightAnswers: number = 0;
let hearts: number = 3;

export const heartsCount$: BehaviorSubject<number> = new BehaviorSubject(3);
export const rightAnswersCount$: BehaviorSubject<number> = new BehaviorSubject(0);

@Injectable()
export class GameService {
  constructor(private _router: Router) {

  }

  public rightAnswer(): void{
    rightAnswers ++;
    rightAnswersCount$.next(rightAnswers);
    alert('Правильный ответ!');
  }

  public wrongAnswer(): void{
    hearts --;
    heartsCount$.next(hearts);
    alert('Неправильный ответ!');
  }

  public checkGame(): void {
    if (hearts === 0) {
      hearts = 3;
      rightAnswers = 0;
      this._router.navigate(['user/defeat']);
    }

    else if (rightAnswers === 3) {
      hearts = 3;
      rightAnswers = 0;
      this._router.navigate(['user/victory']);
    }
  }

}
