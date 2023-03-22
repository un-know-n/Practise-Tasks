import { AppStore } from '../app.store';
import { createSelector } from '@ngrx/store';

const selectStore = (store: AppStore) => store.questions;

export const selectQuestions = createSelector(
  selectStore,
  (state) => state.questions,
);

export const selectAnsweredQuestions = createSelector(
  selectStore,
  (state) => state.answeredQuestions,
);
