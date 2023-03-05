import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { first, mergeMap, Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectToken } from 'src/app/state/auth/auth.selectors';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return this.store.select(selectToken).pipe(
      first(),
      mergeMap((token) => {
        const authReq = token
          ? request.clone({
              setHeaders: { 'X-Token': token },
            })
          : request;
        return next.handle(authReq);
      }),
    );
  }
}
