import { AppStore } from '../app.store';
import { createSelector } from '@ngrx/store';
import * as dayjs from 'dayjs';

const selectStore = (store: AppStore) => store.questions;

export const selectQuestions = createSelector(selectStore, (state) =>
  [...state.questions].sort((a, b) =>
    dayjs(b.createdAt).diff(a.createdAt, 's'),
  ),
);

export const selectAnsweredQuestions = createSelector(selectStore, (state) =>
  state.questions.filter((question) =>
    state.answeredQuestions.includes(question.id),
  ),
);

export const selectUnansweredQuestions = createSelector(selectStore, (state) =>
  state.questions.filter(
    (question) => !state.answeredQuestions.includes(question.id),
  ),
);

export const selectQuestionById = (id: string) =>
  createSelector(selectStore, (state) =>
    state.questions.find((question) => question.id === id),
  );
