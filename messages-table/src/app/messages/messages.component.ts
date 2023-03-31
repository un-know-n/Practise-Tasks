import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { AppStore } from '../app.store';
import { Store } from '@ngrx/store';
import { MessagesActions } from './store/messages.actions';
import { selectMessages } from './store/messages.selectors';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {
  public messages$ = this.store.select(selectMessages);
  displayedColumns: string[] = ['id', 'name', 'message', 'date'];

  constructor(
    public messageDialog: MatDialog,
    private store: Store<AppStore>,
  ) {}

  openMessageDialog(): void {
    this.messageDialog.open(MessageDialogComponent);
  }

  ngOnInit(): void {
    this.store.dispatch(MessagesActions.loadMessages());
  }
}
