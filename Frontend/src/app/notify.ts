import { Injectable } from '@angular/core';

interface Notification {
  id: string;
  employeeName: string;
  employeeId: string;
  messageEnglish: string;
  messageTamil: string;
  priority: string;
  isRead?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notifications: Notification[] = [];

  addNotification(notification: Notification) {

    // Standard Formatting
    const formattedMessage = `
    Employee: ${notification.employeeName}
    Employee ID: ${notification.employeeId}
    `;

    notification.messageEnglish =
      formattedMessage + notification.messageEnglish;

    notification.messageTamil =
      formattedMessage + notification.messageTamil;

    this.notifications.push(notification);
  }

  getNotifications() {
    return this.notifications.sort((a, b) =>
      this.getPriorityValue(a.priority) -
      this.getPriorityValue(b.priority)
    );
  }

  markAsRead(id: string) {
    const notif = this.notifications.find(n => n.id === id);
    if (notif) notif.isRead = true;
  }

  private getPriorityValue(priority: string): number {
    switch (priority) {
      case 'Critical': return 1;
      case 'High': return 2;
      case 'Normal': return 3;
      default: return 4;
    }
  }
}