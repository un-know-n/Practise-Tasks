import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatRippleModule,
    MatButtonModule,
    MatDialogModule,
  ],
  selector: 'app-confirm-dialogue',
  templateUrl: './confirm-dialogue.component.html',
  styleUrls: ['./confirm-dialogue.component.scss'],
})
export class ConfirmDialogueComponent {
  constructor(
    private dialogRef: MatDialogRef<ConfirmDialogueComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { questionTitle: string },
  ) {}

  onClose(): void {
    this.dialogRef.close(false);
  }

  onSubmit() {
    this.dialogRef.close(true);
  }
}
