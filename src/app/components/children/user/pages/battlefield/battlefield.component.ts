import { ChangeDetectionStrategy, Component } from '@angular/core';
import { heartsCount$ } from '../../service/game.service';
import { rightAnswersCount$ } from '../../service/game.service';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'user-battlefield',
  templateUrl: './battlefield.component.html',
  styleUrls: ['./battlefield.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BattlefieldComponent {
  public hearts$: ReplaySubject<number> = heartsCount$;
  public answers$: ReplaySubject<number> = rightAnswersCount$;
}
