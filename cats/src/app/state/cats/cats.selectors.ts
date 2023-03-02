import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';

export const selectCats = (state: AppState) => state.cats;

export const selectAllCats = createSelector(selectCats, (state) => state.cats);

export const selectAllBreeds = createSelector(
  selectCats,
  (state) => state.breeds,
);

export const selectStatus = createSelector(selectCats, (state) => state.status);

export const selectError = createSelector(selectCats, (state) => state.error);
