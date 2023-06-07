import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-enemy',
  templateUrl: './find-enemy.component.html',
  styleUrls: ['./find-enemy.component.scss']
})
export class FindEnemyComponent {

  constructor(private _router: Router) {
  }
  public createBattle(): void {
    this._router.navigate(['user/battle']);
  }
}
