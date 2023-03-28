import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessagesActions } from './messages.actions';
import { catchError, EMPTY, map, switchMap } from 'rxjs';
import { MessagesService } from '../services/messages.service';
import { NotificationsService } from '../../shared/services/notifications.service';

@Injectable()
export class MessagesEffects {
  constructor(
    private actions$: Actions,
    private messagesService: MessagesService,
    private notificationsService: NotificationsService,
  ) {}

  loadMessages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MessagesActions.loadMessages),
      switchMap(() =>
        this.messagesService.getAllMessages().pipe(
          map((messages) => MessagesActions.loadMessagesSuccess({ messages })),
          catchError((response) => {
            this.notificationsService.open('Unexpected error occurred!');
            return EMPTY;
          }),
        ),
      ),
    );
  });
}
