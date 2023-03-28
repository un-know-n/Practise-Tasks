import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IMessage } from '../models/messages';

export const MessagesActions = createActionGroup({
  source: 'Messages',
  events: {
    'Load Messages': emptyProps(),
    'Load Messages Success': props<{ messages: IMessage[] }>(),

    'Write Message': emptyProps(),
    'Write Message Success': props<{ message: IMessage[] }>(),
  },
});
