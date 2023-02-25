import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { CatsService } from 'src/app/components/cats/cats.service';

import {
  loadBreeds,
  loadBreedsFailure,
  loadBreedsSuccess,
  loadCats,
  loadCatsFailure,
  loadCatsSuccess,
} from './cats.actions';

@Injectable()
export class CatsEffects {
  constructor(private actions$: Actions, private catsService: CatsService) {}

  loadBreeds$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadBreeds),
      switchMap(() =>
        from(this.catsService.getBreeds()).pipe(
          map((breeds) => loadBreedsSuccess({ breeds })),
          catchError((error) => of(loadBreedsFailure({ error }))),
        ),
      ),
    );
  });

  loadCats$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCats),
      switchMap((action: ReturnType<typeof loadCats>) =>
        from(this.catsService.getCats(action.limit, action.breed)).pipe(
          map(
            (cats) => loadCatsSuccess({ cats, status: 'success' }),
            catchError((error) => of(loadCatsFailure({ error }))),
          ),
        ),
      ),
    );
  });
}
