import { AppStore } from '../../app.store';
import { createSelector } from '@ngrx/store';
import { IMessagesState } from './messages.reducer';

const selectMessageState = (store: AppStore): IMessagesState => store.messages;

export const selectMessages = createSelector(
  selectMessageState,
  (state) => state.messages,
);
