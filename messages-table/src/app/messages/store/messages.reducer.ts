import { IMessage } from '../models/messages';
import { createReducer, on } from '@ngrx/store';
import { MessagesActions } from './messages.actions';

export interface IMessagesState {
  messages: IMessage[];
}

const initialState: IMessagesState = {
  messages: [],
};

export const messagesReducer = createReducer(
  initialState,
  on(MessagesActions.loadMessagesSuccess, (state, { messages }) => ({
    ...state,
    messages,
  })),
  on(MessagesActions.writeMessageSuccess, (state, { message }) => ({
    ...state,
    messages: [...state.messages, ...message],
  })),
);
