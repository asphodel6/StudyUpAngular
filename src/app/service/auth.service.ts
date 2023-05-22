import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private _http: HttpClient) { }

  public login(): void {
    this._http.get('http://localhost:8080/api/user/all').subscribe(res => console.log(res));
  }
}
