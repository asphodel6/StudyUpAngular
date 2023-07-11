import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { gameOver } from '../service/game.service';

@Injectable({
  providedIn: 'root'
})
export class GameCompleteGuard implements CanActivate {
  public canActivate(): boolean {
    if (gameOver) {
      return true;
    }

    return false;
  }
}
