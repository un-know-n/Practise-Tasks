import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  filter,
  fromEvent,
  iif,
  interval,
  map,
  merge,
  Observable,
  of,
  switchMap,
  takeUntil,
  tap,
  timer,
} from 'rxjs';

@Injectable()
export class PollingService {
  private timeFromActive$ = new BehaviorSubject<number>(0);
  private timer$ = this.checkTabActivity()
    .pipe(
      filter((value) => value),
      map(() => 0),
      switchMap(() =>
        interval(1000).pipe(
          tap(() => {
            if (this.timeFromActive$.value) this.timeFromActive$.next(0);
          }),
          map((value) => this.timeFromActive$.next(value)),
          takeUntil(fromEvent(document, 'visibilitychange')),
        ),
      ),
    )
    .subscribe();

  checkNetworkStatus(): Observable<boolean> {
    return merge(
      of(null),
      fromEvent(window, 'online'),
      fromEvent(window, 'offline'),
    ).pipe(map(() => navigator.onLine));
  }

  checkTabActivity(): Observable<boolean> {
    return merge(of(null), fromEvent(document, 'visibilitychange')).pipe(
      map(() => document.hidden),
    );
  }

  pollData(delay = 10): Observable<any> {
    const delayInMilliseconds = Number((delay * 1000).toFixed(0));
    const visibility$ = fromEvent(document, 'visibilitychange');
    return this.checkNetworkStatus().pipe(
      switchMap(() => this.checkTabActivity().pipe(filter((value) => !value))),
      switchMap(() =>
        iif(
          () => this.timeFromActive$.value < delay,
          timer(delay - this.timeFromActive$.value).pipe(
            switchMap(() =>
              interval(delayInMilliseconds).pipe(takeUntil(visibility$)),
            ),
          ),
          timer(0, delayInMilliseconds).pipe(takeUntil(visibility$)),
        ),
      ),
    );
  }
}
