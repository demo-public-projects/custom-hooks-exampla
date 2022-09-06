import _ from "lodash";
import defaultAvatar from "./assets/user.jpeg";

export class Friend {
  handlers = [];
  isOnline = false;
  name = "";
  surName = "";

  constructor(id, name, surname, avatar = defaultAvatar) {
    this.id = id;
    this.name = name;
    this.surName = surname;
    this.avatar = avatar;

    setInterval(() => {
      const newIsOnline = !_.random(1);
      if (newIsOnline !== this.isOnline) {
        this.isOnline = newIsOnline;
        this.handlers.forEach((handler) => handler(newIsOnline));
      }
    }, 5000);
  }

  subscribeToStatusChange(handler) {
    this.handlers.push(handler);
  }
  unsubscribeFromStatusChange(handler) {
    this.handlers = this.handlers.filter((item) => item !== handler);
  }
}
