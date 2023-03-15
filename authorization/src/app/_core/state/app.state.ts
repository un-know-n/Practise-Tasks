import { AuthState } from './auth/auth.reducer';
import { DataState } from './data/data.reducer';

export interface AppState {
  auth: AuthState;
  data: DataState;
}
