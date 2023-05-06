import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit {

  public registrationForm!: FormGroup;

  public ngOnInit(): void {
    this.registrationForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
      'userName': new FormControl('', [Validators.required])
    });
  }

  public createUser(): void {
    alert('create');
  }

  public get email(): any {
    return this.registrationForm.get('email');
  }

  public get password(): any {
    return this.registrationForm.get('password');
  }

  public get userName(): any {
    return this.registrationForm.get('userName');
  }
}
