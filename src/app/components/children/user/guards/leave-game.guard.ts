import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { gameOver } from '../service/game.service';

@Injectable({
  providedIn: 'root'
})
export class LeaveGameGuard implements CanDeactivate<unknown> {
  public canDeactivate(): boolean {
    if (gameOver) {
      return true;
    }

    return confirm('Вы уверены, что хотите покинуть игру?');
  }
}
