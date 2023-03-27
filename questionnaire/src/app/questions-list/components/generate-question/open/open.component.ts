import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OPEN_MAX_LENGTH } from '../../../../shared/constants/questions';
import { IQuestion } from '../../../../shared/models/questions';
import { ListService } from '../../../services/list.service';

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.scss'],
})
export class OpenComponent implements OnInit {
  @Input() question!: IQuestion;

  public openForm!: FormGroup;

  constructor(private fb: FormBuilder, public listService: ListService) {}

  ngOnInit(): void {
    this.openForm = this.fb.group({
      value: [
        this.question?.answer || '',
        [Validators.required, Validators.maxLength(OPEN_MAX_LENGTH)],
      ],
    });
    if (this.question.answer) this.openForm.disable();
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
