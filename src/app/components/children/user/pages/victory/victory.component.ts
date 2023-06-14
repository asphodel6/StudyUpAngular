import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-victory',
  templateUrl: './victory.component.html',
  styleUrls: ['./victory.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VictoryComponent {
  constructor(private _router: Router) {

  }

  public navigateMain(): void {
    this._router.navigate(['user']);
  }

  public navigateSearch(): void {
    this._router.navigate(['user/search']);
  }
}
