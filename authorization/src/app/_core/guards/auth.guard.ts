import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { first } from 'rxjs';

import { AppState } from '../state/app.state';
import { selectToken } from '../state/auth/auth.selectors';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private store: Store<AppState>) {}

  canActivate(): boolean {
    return this.checkToken();
  }

  canActivateChild(): boolean {
    return this.checkToken();
  }

  private checkToken() {
    let hasToken = false;

    // TODO: Make service for taking info from localStorage
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
