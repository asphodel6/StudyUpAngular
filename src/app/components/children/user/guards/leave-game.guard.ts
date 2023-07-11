import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LeaveGameGuard implements CanDeactivate<unknown> {
  public canDeactivate(): boolean {
    return confirm('Вы уверены, что хотите покинуть игру ?');
  }
}
