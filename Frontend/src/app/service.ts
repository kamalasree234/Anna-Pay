import { Injectable } from '@angular/core';
import { NotificationService } from './notify';


@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private notificationService: NotificationService) {}

  startReminderCheck() {

    setInterval(() => {

      const notifications = this.notificationService.getNotifications();

      notifications.forEach(notif => {

        if (!notif.isRead) {
          console.log("Reminder Triggered for:", notif.employeeName);
          // Here you can call backend API to resend
        }

      });

    }, 60000); // Check every 1 minute
  }
}