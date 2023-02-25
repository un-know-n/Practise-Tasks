import { createAction, props } from '@ngrx/store';

import { Breed, Cat } from './cats.model';
import { CatsState } from './cats.reducer';

export const loadCats = createAction(
  '[Cats Page] Load Cats',
  props<{ limit: string; breed: string }>(),
);

export const loadCatsSuccess = createAction(
  '[Cats Page] Load Cats Success',
  props<{ cats: Cat[]; status: CatsState['status'] }>(),
);

export const loadCatsFailure = createAction(
  '[Cats Page] Load Cats Failure',
  props<{ error: string }>(),
);

export const loadBreeds = createAction('[Cats Page] Load Breeds');

export const loadBreedsSuccess = createAction(
  '[Cats Page] Load Breeds Success',
  props<{ breeds: Breed[] }>(),
);

export const loadBreedsFailure = createAction(
  '[Cats Page] Load Breeds Failure',
  props<{ error: string }>(),
);
