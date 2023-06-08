import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
let rightAnswers: number = 0;
let hearts: number = 3;

export const heartsCount$: ReplaySubject<number> = new ReplaySubject(1);
export const rightAnswersCount$: ReplaySubject<number> = new ReplaySubject(1);

@Injectable()
export class GameService {
  constructor(private _router: Router) {
    heartsCount$.next(3);
    rightAnswersCount$.next(0);
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
      alert('Вы проиграли !');
      this._router.navigate(['user/search']);
    }

    else if (rightAnswers === 3) {
      alert('Вы победили !');
      this._router.navigate(['user/search']);
    }
  }

}