import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../notify';
import { Service } from '../../service';

@Component({
  selector: 'app-notification-panel',
  standalone:false,
  templateUrl: './notification-panel.html'
})
export class NotificationPanel implements OnInit {

  notifications: any[] = [];
  selectedLanguage: string = 'English';

  constructor(
    private notificationService: NotificationService,
    private reminderService: Service
  ) {}

  ngOnInit() {

    this.notifications = this.notificationService.getNotifications();
    this.reminderService.startReminderCheck();
  }

  markRead(id: string) {
    this.notificationService.markAsRead(id);
  }

  changeLanguage(lang: string) {
    this.selectedLanguage = lang;
  }
}