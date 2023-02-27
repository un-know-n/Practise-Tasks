import { createReducer, on } from '@ngrx/store';

import {
  loadBreedsFailure,
  loadBreedsSuccess,
  loadCats,
  loadCatsFailure,
  loadCatsSuccess,
} from './cats.actions';
import { Breed, Cat } from './cats.model';

export interface CatsState {
  cats: Cat[];
  breeds: Breed[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: CatsState = {
  breeds: [],
  cats: [],
  error: null,
  status: 'pending',
};

export const catsReducer = createReducer(
  initialState,
  // Trigger cats loading
  on(loadCats, (state) => ({ ...state, status: 'loading' })),
  // Handle successfully loaded cats
  on(loadCatsSuccess, (state, { cats }) => ({
    ...state,
    status: 'success',
    error: null,
    cats,
  })),
  // Handle error during cats loading
  on(loadCatsFailure, (state, { error }) => ({
    ...state,
    status: 'error',
    error,
  })),
  // Handle successfully loaded breeds
  on(loadBreedsSuccess, (state, { breeds }) => ({
    ...state,
    breeds,
    error: null,
  })),
  // Handle error during loading breeds
  on(loadBreedsFailure, (state, { error }) => ({
    ...state,
    status: 'error',
    error,
  })),
);
