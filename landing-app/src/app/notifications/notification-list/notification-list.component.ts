import { Component, OnInit } from '@angular/core';
import { Command, NotificationsService } from '../notifications.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
  messages?: Observable<Command[]>;

  constructor(private notificationsService: NotificationsService) {
    this.messages = notificationsService.messagesOutput;
  }

  ngOnInit(): void {
  }

  clearMessage(id: number) {
    this.notificationsService.clearMessage(id);
  }
}
