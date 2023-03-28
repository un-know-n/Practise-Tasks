import { Component } from '@angular/core';
import { NotificationsService } from '../shared/services/notifications.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {
  constructor(private notificationsService: NotificationsService) {}

  ngOnInit(): void {
    this.notificationsService.open('Messages initialized');
  }
}
