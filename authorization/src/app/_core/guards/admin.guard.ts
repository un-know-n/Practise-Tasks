import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { first, Observable } from 'rxjs';

import { AppState } from '../state/app.state';
import { selectIsAdmin } from '../state/auth/auth.selectors';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AppState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let isAdmin = false;

    this.store
      .select(selectIsAdmin)
      .pipe(first())
      .subscribe((value) => (isAdmin = Boolean(value)));

    if (isAdmin) return true;
    else {
      this.router.navigateByUrl('/');
      return false;
    }
  }
}
