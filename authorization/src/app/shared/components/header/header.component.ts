import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/_core/state/app.state';
import { AuthActions } from 'src/app/_core/state/auth/auth.actions';
import {
  selectIsAdmin,
  selectName,
} from 'src/app/_core/state/auth/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public name$ = this.store.select(selectName);
  public isAdmin$ = this.store.select(selectIsAdmin);
  public currentRoute!: string;

  constructor(private store: Store<AppState>, private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  // TODO: Redo for stream
  checkPath(url: string): boolean {
    return this.currentRoute === url;
  }

  onLogOut(): void {
    this.store.dispatch(AuthActions.eraseUser());
  }
}
