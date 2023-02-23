import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { composeFormObject } from 'src/app/utils/composeFormObject';

@Component({
  selector: 'app-hobby-dialog',
  templateUrl: './hobby-dialog.component.html',
  styleUrls: ['./hobby-dialog.component.css'],
})
export class HobbyDialogComponent implements OnInit {
  hobbyForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<HobbyDialogComponent>) {}

  ngOnInit(): void {
    this.hobbyForm = new FormGroup({
      name: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (!this.hobbyForm.valid) {
      console.log('There are errors');
      return;
    }
    this.dialogRef.close(composeFormObject(this.hobbyForm));
  }
}
