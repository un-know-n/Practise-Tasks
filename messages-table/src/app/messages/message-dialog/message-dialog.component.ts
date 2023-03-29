import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { AppStore } from '../../app.store';
import { MessagesService } from '../services/messages.service';
import { MessagesActions } from '../store/messages.actions';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss'],
})
export class MessageDialogComponent {
  messageForm!: FormGroup;
  firestore: Firestore = inject(Firestore);
  isLoading = this.messagesService.isWritingMessage;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MessageDialogComponent>,
    private messagesService: MessagesService,
    private store: Store<AppStore>,
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
    this.store.dispatch(
      MessagesActions.writeMessage({
        name: this.name.value,
        message: this.message.value,
      }),
    );
  }

  get name(): FormControl {
    return this.messageForm.get('name') as FormControl;
  }

  get message(): FormControl {
    return this.messageForm.get('message') as FormControl;
  }
}
