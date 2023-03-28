import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(public snackBar: MatSnackBar, private _zone: NgZone) {}

  public open(message: string, action = 'Close', duration = 10000): void {
    this._zone.run(() => {
      this.snackBar.open(message, action, {
        duration,
      });
    });
  }
}
