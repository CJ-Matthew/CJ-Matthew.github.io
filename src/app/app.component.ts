import { Component } from '@angular/core';
import { OneSignal } from 'onesignal-ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onesignal-website';

  constructor(private oneSignal: OneSignal) {
    // this.oneSignal.init({
    //   appId: "47b373e4-cc58-4cce-a882-47dafae6f728",
    // });
  }

  subFailed = this.oneSignal.Notifications.permissionNative;

  isSupported = this.oneSignal.Notifications.isPushSupported();

  subStatus = this.oneSignal.Notifications.permission;

  addNotificationTag(key: string, tag: string) {
    this.oneSignal.User.addTag(key, tag);
  }

  subToNotifications() {
    this.oneSignal.Notifications.requestPermission();
  }
 }
