import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AppState } from 'src/app/_core/state/app.state';
import { AuthActions } from 'src/app/_core/state/auth/auth.actions';
import {
  selectError,
  selectStatus,
} from 'src/app/_core/state/auth/auth.selectors';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  public authForm = new FormGroup({
    email: new FormControl('user@deepersignals.com', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });
  public error$ = this.store.select(selectError);
  public status$ = this.store.select(selectStatus);

  constructor(private store: Store<AppState>) {}

  onSubmit(): void {
    if (!this.authForm.valid) return;

    this.store.dispatch(
      AuthActions.loadUser({
        email: this.email.value,
        password: this.password.value,
      }),
    );
  }

  getFieldError(field: 'email' | 'password', error = 'required'): boolean {
    return this.authForm.controls[field].hasError(error);
  }

  checkStatus(status: string) {
    return this.status$.pipe(map((value) => value === status));
  }

  get email(): FormControl<string> {
    return <FormControl>this.authForm.controls.email;
  }

  get password(): FormControl<string> {
    return <FormControl>this.authForm.controls.password;
  }
}
