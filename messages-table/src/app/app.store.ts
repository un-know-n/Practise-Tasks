import { IMessagesState } from './messages/store/messages.reducer';

export interface AppStore {
  messages: IMessagesState;
}
