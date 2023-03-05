import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { AuthActions } from 'src/app/state/auth/auth.actions';
import { selectIsAdmin, selectName } from 'src/app/state/auth/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public name$ = this.store.select(selectName);
  public isAdmin$ = this.store.select(selectIsAdmin);

  constructor(private store: Store<AppState>) {}

  onLogOut() {
    this.store.dispatch(AuthActions.eraseUser());
  }
}
