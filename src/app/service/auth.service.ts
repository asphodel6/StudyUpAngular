import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogin } from '../interfaces/login.user.interface';
import { IRegistration } from '../interfaces/registration.user.interface';
import { catchError, from, Observable, take, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
const url: string = 'http://localhost:8080';
const userToken: string = 'true';
import firebase from 'firebase/compat';

@Injectable()
export class AuthService {
  private readonly _user!: Observable<firebase.User | null>;
  constructor(private _http: HttpClient, private _router: Router, private _fireAuth: AngularFireAuth) {
    this._user = _fireAuth.authState;
  }

  public login(user: ILogin): void {
    // this._http.post(`${url}/api/auth/login`, user).pipe(
    //   take(1),
    //   catchError(err => {
    //     return throwError(err);
    //   })
    // ).subscribe(res => sessionStorage.setItem('token', res.toString()));
    from(this._fireAuth.signInWithEmailAndPassword(user.email, user.password)).pipe(
      take(1)
    ).subscribe(() => {
      this._router.navigate(['user']);
    });
  }

  public registration(user: IRegistration): void {
    // this._http.post(`${url}/api/auth/register`, user);
    // alert('Account created successfully');
    from(this._fireAuth.createUserWithEmailAndPassword(user.email, user.password)).pipe(
      take(1)
    ).subscribe(() => {
      this._router.navigate(['login']);
      alert('Вы успешно зарегестрировались!');
    });
  }

  public isLoggedIn(): Observable<firebase.User | null> {
    return this._user;
  }
}
