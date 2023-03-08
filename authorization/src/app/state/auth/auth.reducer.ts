import { createReducer, on } from '@ngrx/store';

import { AuthActions } from './auth.actions';

export interface AuthState {
  firstName: string;
  lastName: string;
  isAdmin: boolean;
  token: string;
  error: string | null;
  status: 'pending' | 'loading' | 'success' | 'error';
}

export const initialState: AuthState = {
  firstName: '',
  lastName: '',
  isAdmin: false,
  token: '',
  error: null,
  status: 'pending',
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loadUser, (state) => ({
    ...state,
    status: 'loading',
    error: null,
  })),
  on(AuthActions.loadUserSuccess, (state, payload) => ({
    ...state,
    ...payload,
    status: 'success',
    error: null,
  })),
  on(AuthActions.loadUserFailure, (state, { error }) => ({
    ...state,
    error,
    status: 'error',
  })),
  on(AuthActions.eraseUser, () => ({ ...initialState })),
);
