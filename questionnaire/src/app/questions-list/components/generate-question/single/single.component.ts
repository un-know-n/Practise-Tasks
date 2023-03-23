import { Component, Input } from '@angular/core';
import { IQuestion } from '../../../../shared/models/questions';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
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
    MatCheckboxModule,
    MatRadioModule,
  ],
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})
export class SingleComponent {
  @Input() question!: IQuestion;
  @Input() disabled = false;
  public singleForm!: FormGroup;

  constructor(private fb: FormBuilder, public listService: ListService) {
    this.singleForm = this.fb.group({
      value: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.singleForm.markAllAsTouched();
    if (this.singleForm.valid)
      this.listService.onAnswer(
        this.question.id,
        this.singleForm.controls['value'].value,
      );
  }
}
