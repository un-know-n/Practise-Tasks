import { Component, Input, OnInit } from '@angular/core';
import { IQuestion } from '../../../../shared/models/questions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListService } from '../../../services/list.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})
export class SingleComponent implements OnInit {
  @Input() question!: IQuestion;
  public singleForm!: FormGroup;

  constructor(private fb: FormBuilder, public listService: ListService) {}

  ngOnInit(): void {
    this.singleForm = this.fb.group({
      value: [this.question?.answer || '', Validators.required],
    });
    if (this.question.answer) this.singleForm.disable();
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
