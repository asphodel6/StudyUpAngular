import { ChangeDetectionStrategy, Component } from '@angular/core';
import { heartsCount$ } from '../../service/game.service';
import { rightAnswersCount$ } from '../../service/game.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'user-battlefield',
  templateUrl: './battlefield.component.html',
  styleUrls: ['./battlefield.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BattlefieldComponent{
  public hearts$: BehaviorSubject<number> = heartsCount$;
  public answers$: BehaviorSubject<number> = rightAnswersCount$;
}
