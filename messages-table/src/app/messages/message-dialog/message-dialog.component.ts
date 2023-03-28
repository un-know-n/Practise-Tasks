import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { NotificationsService } from '../../shared/services/notifications.service';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss'],
})
export class MessageDialogComponent {
  messageForm!: FormGroup;
  firestore: Firestore = inject(Firestore);
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MessageDialogComponent>,
    private notificationsService: NotificationsService,
  ) {
    this.messageForm = this.fb.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (!this.messageForm.valid) return;
    this.isLoading = true;
    addDoc(collection(this.firestore, 'messages'), {
      name: this.name.value,
      message: this.message.value,
      createdAt: new Date(),
    })
      .then(() => {
        this.dialogRef.close();
        this.notificationsService.open('Message was successfully delivered!');
        this.isLoading = false;
      })
      .catch(() => {
        this.notificationsService.open(
          'Something went wrong... Please, try again!',
        );
        this.isLoading = false;
      });
  }

  get name(): FormControl {
    return this.messageForm.get('name') as FormControl;
  }

  get message(): FormControl {
    return this.messageForm.get('message') as FormControl;
  }
}
