import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessagesActions } from './messages.actions';
import { catchError, EMPTY, map, switchMap, take } from 'rxjs';
import { MessagesService } from '../services/messages.service';
import { NotificationsService } from '../../shared/services/notifications.service';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class MessagesEffects {
  constructor(
    private actions$: Actions,
    private messagesService: MessagesService,
    private notificationsService: NotificationsService,
    private dialogRef: MatDialog,
  ) {}

  loadMessages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MessagesActions.loadMessages),
      switchMap(() => {
        return this.messagesService.getAllMessages().pipe(
          map((messages) => MessagesActions.loadMessagesSuccess({ messages })),
          catchError(() => {
            this.notificationsService.open('Unexpected error occurred!');
            return EMPTY;
          }),
          take(1),
        );
      }),
    );
  });

  writeMessage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MessagesActions.writeMessage),
      switchMap(({ message, name }) =>
        this.messagesService.writeMessage(name, message).pipe(
          map((msg) => {
            this.notificationsService.open(
              'Message was successfully delivered!',
            );
            this.dialogRef.closeAll();
            return MessagesActions.writeMessageSuccess({ message: msg });
          }),
          catchError(() => {
            this.notificationsService.open(
              'Something went wrong... Please, try again!',
            );
            return EMPTY;
          }),
        ),
      ),
    );
  });
}
