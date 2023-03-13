import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { DataService } from '../../services/data.service';
import { DataActions } from './data.actions';

@Injectable()
export class DataEffects {
  constructor(private actions$: Actions, private dataService: DataService) {}

  loadDashboard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DataActions.loadDashboard),
      switchMap(() =>
        this.dataService.getDashboard().pipe(
          map((dashboard) => DataActions.loadDashboardSuccess({ dashboard })),
          catchError((response: HttpErrorResponse) =>
            of(DataActions.loadError({ error: response.error.error })),
          ),
        ),
      ),
    );
  });

  loadAssessment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DataActions.loadAssessment),
      switchMap(({ id }) => {
        return this.dataService.getDashboardAssessment(id).pipe(
          map((assessment) =>
            DataActions.loadAssessmentSuccess({ assessment }),
          ),
          catchError((response: HttpErrorResponse) =>
            of(DataActions.loadError({ error: response.error.error })),
          ),
        );
      }),
    );
  });

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DataActions.loadUsers),
      switchMap(() =>
        this.dataService.getUsers().pipe(
          map((users) => DataActions.loadUsersSuccess({ users })),
          catchError((response: HttpErrorResponse) =>
            of(DataActions.loadError({ error: response.error.error })),
          ),
        ),
      ),
    );
  });
}
