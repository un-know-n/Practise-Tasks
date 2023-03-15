import { createReducer, on } from '@ngrx/store';
import {
  IAdminPanelItem,
  IAssessmentReport,
  IDashboardItem,
} from 'src/app/shared/models/data.model';

import { DataActions } from './data.actions';

// TODO: Output error in toast instead of NgRx store saving
export interface DataState {
  users: IAdminPanelItem[];
  dashboard: IDashboardItem[];
  assessment: IAssessmentReport | null;
  error: string | null;
}

export const initialState: DataState = {
  assessment: null,
  dashboard: [],
  users: [],
  error: null,
};

export const dataReducer = createReducer(
  initialState,
  on(DataActions.loadAssessment, (state) => ({
    ...state,
    error: null,
  })),
  on(DataActions.loadAssessmentSuccess, (state, { assessment }) => ({
    ...state,
    assessment: assessment,
  })),

  on(DataActions.loadDashboard, (state) => ({
    ...state,
    error: null,
  })),
  on(DataActions.loadDashboardSuccess, (state, { dashboard }) => ({
    ...state,
    dashboard: dashboard,
  })),
  on(DataActions.loadUsers, (state) => ({
    ...state,
    error: null,
  })),
  on(DataActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users: users,
  })),
  on(DataActions.loadError, (state, { error }) => ({
    ...state,
    error: error,
  })),
);
