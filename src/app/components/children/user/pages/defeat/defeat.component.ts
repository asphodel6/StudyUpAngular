import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-defeat',
  templateUrl: './defeat.component.html',
  styleUrls: ['./defeat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefeatComponent {
  constructor(private _router: Router) {

  }

  public navigateMain(): void {
    this._router.navigate(['user']);
  }

  public navigateSearch(): void {
    this._router.navigate(['user/search']);
  }
}
