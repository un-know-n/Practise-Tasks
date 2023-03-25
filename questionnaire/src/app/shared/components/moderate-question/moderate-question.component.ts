import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { IQuestion, TQuestionType } from '../../models/questions';
import {
  EMPTY_FIELDS,
  MULTIANSWER_QUESTION_TYPES,
  QUESTIONS_TYPES,
} from '../../constants/questions';

import { nanoid } from 'nanoid';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const OPTIONS_CONTROL_NAME = 'options';

@Component({
  selector: 'app-moderate-question',
  templateUrl: './moderate-question.component.html',
  styleUrls: ['./moderate-question.component.scss'],
})
export class ModerateQuestionComponent implements OnInit {
  @Input() question: IQuestion | null = null;
  @Output() saveQuestion = new EventEmitter<IQuestion>();
  questionForm!: FormGroup;
  availableTypes = QUESTIONS_TYPES;
  multipleTypes = MULTIANSWER_QUESTION_TYPES;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.question)
      this.createQuestionForm(this.question.title, this.question.type);
    else this.createQuestionForm('', this.availableTypes[0]);
  }

  createQuestionForm(title: string, type: TQuestionType): void {
    this.questionForm = this.fb.group({
      title: [title, Validators.required],
      type: [type, Validators.required],
    });
    this.onOptionChange(type);
    this.questionForm
      .get('type')
      ?.valueChanges.subscribe((value) => this.onOptionChange(value));
  }

  onOptionChange(type: TQuestionType): void {
    const optionsControl = this.options;
    if (!MULTIANSWER_QUESTION_TYPES.includes(type))
      this.questionForm.removeControl(OPTIONS_CONTROL_NAME);
    else if (!optionsControl) this.generateOptions();
  }

  generateOptions(): void {
    const options = this.question?.options || EMPTY_FIELDS;
    this.questionForm.addControl(
      OPTIONS_CONTROL_NAME,
      this.fb.control(options, [Validators.required, this.checkForEmptiness()]),
    );
  }

  checkForEmptiness(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const empty = control.value.includes('');
      return empty ? { emptyField: { value: control.value } } : null;
    };
  }

  getFieldError(controlName: string, error = 'required'): boolean {
    return this.questionForm.controls[controlName].hasError(error);
  }

  onSubmit(): void {
    if (this.questionForm.valid)
      this.saveQuestion.emit({
        id: this.question?.id || nanoid(),
        options: this.options?.value || undefined,
        answer: null,
        type: this.questionForm.controls['type'].value,
        title: this.questionForm.controls['title'].value,
        createdAt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      });
  }

  get options(): FormArray<FormControl> {
    return this.questionForm.get(OPTIONS_CONTROL_NAME) as FormArray;
  }
}
