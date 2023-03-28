import { Component } from '@angular/core';
import { NotificationsService } from '../shared/services/notifications.service';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {
  constructor(
    private notificationsService: NotificationsService,
    public messageDialog: MatDialog,
  ) {}

  openMessageDialog(): void {
    const dialogRef = this.messageDialog.open(MessageDialogComponent);

    dialogRef.afterClosed().subscribe((result) => console.log(result));
  }

  //
  // ngOnInit(): void {
  //   this.notificationsService.open('Messages initialized');
  // }
}
