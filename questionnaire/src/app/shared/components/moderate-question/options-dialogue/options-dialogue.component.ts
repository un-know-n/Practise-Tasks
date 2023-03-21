import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-options-dialogue',
  templateUrl: './options-dialogue.component.html',
  styleUrls: ['./options-dialogue.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class OptionsDialogueComponent {
  optionForm!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<OptionsDialogueComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA)
    public data: { title: string; optionValue: string },
  ) {
    this.optionForm = this.fb.group({
      option: [this.data.optionValue || '', Validators.required],
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.optionForm.valid)
      this.dialogRef.close(this.optionForm.controls['option'].value);
  }
}
