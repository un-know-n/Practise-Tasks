import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { AuthService } from 'src/app/_core/services/auth.service';

import { AuthActions } from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}

  loadUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loadUser),
      switchMap(
        ({ email, password }: ReturnType<typeof AuthActions.loadUser>) =>
          this.authService.login({ email, password }).pipe(
            map((credentials) =>
              AuthActions.loadUserSuccess({
                firstName: credentials.first_name,
                lastName: credentials.last_name,
                token: credentials.token,
                isAdmin: credentials.role === 'Admin',
              }),
            ),
            catchError((response: HttpErrorResponse) => {
              return of(
                AuthActions.loadUserFailure({ error: response.error.error }),
              );
            }),
          ),
      ),
    );
  });

  loginRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.loadUserSuccess),
        tap(() => {
          this.router.navigate(['/']);
        }),
      );
    },
    { dispatch: false },
  );

  logoutRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.eraseUser),
        tap(() => {
          this.router.navigate(['/auth']);
        }),
      );
    },
    { dispatch: false },
  );
}
