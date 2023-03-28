import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages.component';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MessagesService } from './services/messages.service';
import { EffectsModule } from '@ngrx/effects';
import { MessagesEffects } from './store/messages.effects';

@NgModule({
  declarations: [MessagesComponent, MessageDialogComponent],
  imports: [
    EffectsModule.forFeature([MessagesEffects]),
    CommonModule,
    MessagesRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  providers: [MessagesService],
  exports: [MessagesComponent],
})
export class MessagesModule {}
