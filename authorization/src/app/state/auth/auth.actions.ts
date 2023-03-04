import { createActionGroup, props } from '@ngrx/store';

import { AuthState } from './auth.reducer';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'Load User': props<{ email: string; password: string }>(),
    'Load User Success':
      props<Pick<AuthState, 'firstName' | 'lastName' | 'isAdmin' | 'token'>>(),
    'Load User Failure': props<{ error: string }>(),
  },
});
