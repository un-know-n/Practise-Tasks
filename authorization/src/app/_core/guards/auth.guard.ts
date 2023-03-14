import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { first, Observable } from 'rxjs';

import { AppState } from '../state/app.state';
import { selectToken } from '../state/auth/auth.selectors';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private store: Store<AppState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkToken();
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkToken();
  }

  private checkToken() {
    let hasToken = false;
    this.store
      .select(selectToken)
      .pipe(first())
      .subscribe((value) => (hasToken = Boolean(value)));

    if (hasToken) return true;
    else {
      this.router.navigateByUrl('/auth');
      return false;
    }
  }
}
