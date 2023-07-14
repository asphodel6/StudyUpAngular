import { Injectable } from '@angular/core';
import firebase from 'firebase/compat';
import FirebaseError = firebase.FirebaseError;

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService {
  public handleError(error: FirebaseError): void {
    if (error.message === 'Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).'){
      alert(`Неправильный логин или пароль`);
    }
  }
}
