import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { OPEN_MAX_LENGTH } from '../../../../shared/constants/questions';
import { IQuestion } from '../../../../shared/models/questions';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ListService } from '../../../services/list.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRippleModule,
    MatButtonModule,
  ],
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.scss'],
})
export class OpenComponent {
  @Input() question!: IQuestion;
  @Input() disabled = false;
  public openForm!: FormGroup;

  constructor(private fb: FormBuilder, public listService: ListService) {
    this.openForm = this.fb.group({
      value: ['', [Validators.required, Validators.maxLength(OPEN_MAX_LENGTH)]],
    });
  }

  onSubmit(): void {
    this.openForm.markAllAsTouched();
    if (this.openForm.valid)
      this.listService.onAnswer(
        this.question.id,
        this.openForm.controls['value'].value,
      );
  }
}
