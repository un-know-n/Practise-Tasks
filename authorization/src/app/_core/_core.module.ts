import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { isDevMode, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';

import { AuthEffects } from './state/auth/auth.effects';
import { authReducer } from './state/auth/auth.reducer';
import { DataEffects } from './state/data/data.effects';
import { dataReducer } from './state/data/data.reducer';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>,
): ActionReducer<any> {
  return localStorageSync({
    keys: [{ auth: ['firstName', 'lastName', 'isAdmin', 'token'] }],
    rehydrate: true,
  })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(
      { auth: authReducer, data: dataReducer },
      { metaReducers },
    ),
    EffectsModule.forRoot([AuthEffects, DataEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
})
export class CoreModule {}
