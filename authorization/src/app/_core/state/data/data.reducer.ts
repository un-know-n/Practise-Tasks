import { createReducer, on } from '@ngrx/store';
import {
  IAdminPanelItem,
  IAssessmentReport,
  IDashboardItem,
} from 'src/app/shared/models/data.model';

import { DataActions } from './data.actions';

export interface DataState {
  users: IAdminPanelItem[];
  dashboard: IDashboardItem[];
  assessment: IAssessmentReport | null;
  error: string | null;
  loading: {
    dashboard: boolean;
    assessment: boolean;
    users: boolean;
  };
}

export const initialState: DataState = {
  assessment: null,
  dashboard: [],
  users: [],
  error: null,
  loading: {
    assessment: false,
    dashboard: false,
    users: false,
  },
};

export const dataReducer = createReducer(
  initialState,
  on(DataActions.loadAssessment, (state) => ({
    ...state,
    loading: {
      ...state.loading,
      assessment: true,
    },
    error: null,
  })),
  on(DataActions.loadAssessmentSuccess, (state, { assessment }) => ({
    ...state,
    assessment: assessment,
    loading: {
      ...state.loading,
      assessment: false,
    },
  })),

  on(DataActions.loadDashboard, (state) => ({
    ...state,
    loading: {
      ...state.loading,
      dashboard: true,
    },
    error: null,
  })),
  on(DataActions.loadDashboardSuccess, (state, { dashboard }) => ({
    ...state,
    dashboard: dashboard,
    loading: {
      ...state.loading,
      dashboard: false,
    },
  })),
  on(DataActions.loadUsers, (state) => ({
    ...state,
    loading: {
      ...state.loading,
      users: true,
    },
    error: null,
  })),
  on(DataActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users: users,
    loading: {
      ...state.loading,
      users: false,
    },
  })),
  on(DataActions.loadError, (state, { error }) => ({
    ...state,
    error: error,
    loading: {
      assessment: false,
      dashboard: false,
      users: false,
    },
  })),
);
