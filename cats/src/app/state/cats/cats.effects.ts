import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { CatsService } from 'src/app/components/cats/cats.service';

import { loadCats, loadCatsFailure, loadCatsSuccess } from './cats.actions';

@Injectable()
export class CatsEffects {
  constructor(private actions$: Actions, private catsService: CatsService) {}

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
