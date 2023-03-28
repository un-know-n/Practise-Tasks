import { Component } from '@angular/core';
import { NotificationsService } from '../shared/services/notifications.service';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { AppStore } from '../app.store';
import { Store } from '@ngrx/store';
import { MessagesActions } from './store/messages.actions';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {
  constructor(
    private notificationsService: NotificationsService,
    public messageDialog: MatDialog,
    private store: Store<AppStore>,
  ) {}

  openMessageDialog(): void {
    this.messageDialog.open(MessageDialogComponent);
  }

  ngOnInit(): void {
    this.store.dispatch(MessagesActions.loadMessages());
    // this.notificationsService.open('Messages initialized');
    // this.messagesService.getAllMessages();
  }
}
