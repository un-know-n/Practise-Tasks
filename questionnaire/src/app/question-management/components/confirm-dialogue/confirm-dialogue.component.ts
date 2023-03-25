import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
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

  onSubmit(): void {
    this.dialogRef.close(true);
  }
}
