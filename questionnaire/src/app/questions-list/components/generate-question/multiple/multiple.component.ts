import { Component, Input, OnInit } from '@angular/core';
import { IQuestion } from '../../../../shared/models/questions';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
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
  ],
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.scss'],
})
export class MultipleComponent implements OnInit {
  @Input() question!: IQuestion;
  @Input() disabled = false;
  public multiForm!: FormGroup;

  constructor(private fb: FormBuilder, public listService: ListService) {}

  ngOnInit(): void {
    this.multiForm = this.fb.group(
      {
        ...this.generateControls(this.question?.options || []),
      },
      { validators: this.atLeastOneChecked },
    );
  }

  generateControls(options: string[]): object {
    return options.reduce((acc, option) => {
      (acc as any)[option] = false;
      return acc;
    }, {});
  }

  atLeastOneChecked(formGroup: FormGroup): ValidationErrors | null {
    let checked = 0;
    Object.keys(formGroup.controls).forEach((key) =>
      formGroup.controls[key].value ? (checked += 1) : '',
    );
    return checked < 1 ? { atLeastOneChecked: true } : null;
  }

  onSubmit(): void {
    this.multiForm.markAllAsTouched();
    if (this.multiForm.valid)
      this.listService.onAnswer(
        this.question.id,
        Object.keys(this.multiForm.value).filter(
          (option) => this.multiForm.value[option],
        ),
      );
  }
}
