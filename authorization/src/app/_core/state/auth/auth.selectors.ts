import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';

export const selectAuth = (state: AppState) => state.auth;

export const selectName = createSelector(
  selectAuth,
  (state) => `${state.firstName} ${state.lastName}`,
);

export const selectIsAdmin = createSelector(
  selectAuth,
  (state) => state.isAdmin,
);

export const selectToken = createSelector(selectAuth, (state) => state.token);

export const selectError = createSelector(selectAuth, (state) => state.error);

export const selectStatus = createSelector(selectAuth, (state) => state.status);
