import { nanoid } from 'nanoid';
import notificationTypes from '../../data/notification-type.json';

class Notification {
  constructor({ title, message, type = notificationTypes.info, timeout = 5000 }) {
    this.id = nanoid();
    this.title = title;
    this.message = message;
    this.type = type;
    this.timeout = timeout;
  }

  static get Types() {
    return notificationTypes;
  }
}

export default Notification;
