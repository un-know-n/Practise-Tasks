import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { loadBreedsSuccess } from 'src/app/state/cats/cats.actions';
import { Breed } from 'src/app/state/cats/cats.model';

import { CatsService } from './cats.service';

@Injectable({
  providedIn: 'root',
})
export class CatsResolver implements Resolve<Breed[]> {
  constructor(
    private store: Store<AppState>,
    private catsService: CatsService,
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<Breed[]> {
    return this.catsService
      .getBreeds()
      .pipe(
        tap((value) =>
          this.store.dispatch(loadBreedsSuccess({ breeds: value })),
        ),
      );
  }
}
