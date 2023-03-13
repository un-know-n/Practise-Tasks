import { createSelector } from '@ngrx/store';
import { transformAssessmentObject } from 'src/app/shared/utils/transformAssessmentObject';

import { AppState } from '../app.state';

export const selectData = (state: AppState) => state.data;

export const selectUsers = createSelector(selectData, (state) => state.users);

export const selectDashboard = createSelector(
  selectData,
  (state) => state.dashboard,
);

export const selectFormattedAssessment = createSelector(selectData, (state) =>
  transformAssessmentObject(state.assessment),
);

export const selectError = createSelector(selectData, (state) => state.error);
