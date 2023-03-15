import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { first } from 'rxjs';

import { AppState } from '../state/app.state';
import { selectIsAdmin } from '../state/auth/auth.selectors';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AppState>) {}

  canActivate(): boolean {
    let isAdmin = false;

    // TODO: Make service for taking info from localStorage
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
