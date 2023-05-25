import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogin } from '../interfaces/login.user.interface';
import { IRegistration } from '../interfaces/registration.user.interface';
import { take } from 'rxjs';
import { Router } from '@angular/router';
const url: string = 'http://localhost:8080';
const userToken: string = 'true';

@Injectable()
export class AuthService {

  constructor(private _http: HttpClient, private _router: Router) { }

  public login(user: ILogin): void {
    this._http.post(`${url}/api/auth/login`, user).pipe(
      take(1)
    ).subscribe(res => sessionStorage.setItem('token', res.toString()));
    this._router.navigate(['user']);
    alert('You have successfully logged in');
  }

  public registration(user: IRegistration): void {
    this._http.post(`${url}/api/auth/register`, user);
    alert('Account created successfully');
  }

  public isLoggedIn(): boolean {
    return sessionStorage.getItem('token') === userToken;
  }
}
