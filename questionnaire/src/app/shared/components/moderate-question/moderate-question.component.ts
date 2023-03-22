import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { IQuestion, TQuestionType } from '../../models/questions';
import {
  MULTIANSWER_QUESTION_TYPES,
  QUESTIONS_TYPES,
} from '../../constants/questions';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { OptionsDialogueComponent } from './options-dialogue/options-dialogue.component';
import { nanoid } from 'nanoid';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRippleModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatRadioModule,
    OptionsDialogueComponent,
  ],
  selector: 'app-moderate-question',
  templateUrl: './moderate-question.component.html',
  styleUrls: ['./moderate-question.component.scss'],
})
export class ModerateQuestionComponent implements OnInit {
  @Input() question: IQuestion | null = null;
  @Output() saveQuestion = new EventEmitter<IQuestion>();
  questionForm!: FormGroup;
  availableTypes = QUESTIONS_TYPES;

  constructor(private dialog: MatDialog, private fb: FormBuilder) {}

  get options(): FormArray<FormControl> {
    return this.questionForm.get('options') as FormArray;
  }

  ngOnInit(): void {
    if (this.question)
      this.createQuestionForm(
        this.question.title,
        this.question.type,
        this.question.options || [],
      );
    else this.createQuestionForm('', this.availableTypes[0], []);
  }

  createQuestionForm(title: string, type: TQuestionType, options: string[]) {
    this.questionForm = this.fb.group({
      title: [title, Validators.required],
      type: [type, Validators.required],
      ...(MULTIANSWER_QUESTION_TYPES.includes(type) && {
        options: this.fb.array(
          [...options],
          [Validators.required, Validators.minLength(2)],
        ),
      }),
    });
  }

  onOptionChange(type: TQuestionType) {
    const optionsControl = this.options;
    if (!MULTIANSWER_QUESTION_TYPES.includes(type))
      this.questionForm.removeControl('options');
    else if (!optionsControl)
      this.questionForm.setControl(
        'options',
        this.fb.array([], [Validators.required, Validators.minLength(2)]),
      );
  }

  onDeleteOption(index: number) {
    this.options.removeAt(index);
  }

  onEditOption(index: number, value: string) {
    this.dialog
      .open(OptionsDialogueComponent, {
        data: { title: 'Edit answer option', optionValue: value },
      })
      .afterClosed()
      .subscribe((option: string) => {
        this.options.at(index).setValue(option);
      });
  }

  onAddOption() {
    this.dialog
      .open(OptionsDialogueComponent, {
        data: { title: 'Add answer option', optionValue: '' },
      })
      .afterClosed()
      .subscribe((option: string) => {
        this.options.push(this.fb.control(option, Validators.required));
      });
  }

  getFieldError(controlName: string, error = 'required') {
    return this.questionForm.controls[controlName].hasError(error);
  }

  onSubmit() {
    if (this.questionForm.valid)
      this.saveQuestion.emit({
        id: this.question?.id || nanoid(),
        options: this.options?.value || undefined,
        answer: null,
        type: this.questionForm.controls['type'].value,
        title: this.questionForm.controls['title'].value,
        createdAt: dayjs().utc(true).toString(),
      });
  }
}
