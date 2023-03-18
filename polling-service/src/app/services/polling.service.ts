import { Injectable } from '@angular/core';
import {
  delay,
  filter,
  fromEvent,
  iif,
  map,
  merge,
  Observable,
  of,
  switchMap,
  takeUntil,
  timeInterval,
  timer,
} from 'rxjs';

@Injectable()
export class PollingService {
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

  pollData(repeatInMilliseconds = 10000): Observable<number> {
    return this.checkNetworkStatus().pipe(
      filter((conn) => conn),
      switchMap(() =>
        this.checkTabActivity().pipe(
          timeInterval(),
          filter((value) => !value.value),
        ),
      ),
      switchMap(({ interval }) =>
        iif(
          () => interval < repeatInMilliseconds,
          of(null).pipe(
            delay(repeatInMilliseconds - interval),
            switchMap(() => timer(0, repeatInMilliseconds)),
          ),
          timer(0, repeatInMilliseconds),
        ).pipe(
          takeUntil(
            merge(
              fromEvent(window, 'offline'),
              fromEvent(document, 'visibilitychange'),
            ),
          ),
        ),
      ),
    );
  }
}
