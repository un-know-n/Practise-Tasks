import { Component, Input, OnInit } from '@angular/core';
import { IQuestion } from '../../../../shared/models/questions';
import { FormBuilder, FormGroup, ValidationErrors } from '@angular/forms';
import { ListService } from '../../../services/list.service';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.scss'],
})
export class MultipleComponent implements OnInit {
  @Input() question!: IQuestion;
  public multiForm!: FormGroup;

  constructor(private fb: FormBuilder, public listService: ListService) {}

  ngOnInit(): void {
    this.multiForm = this.fb.group(
      {
        ...this.generateControls(this.question?.options || []),
      },
      { validators: this.atLeastOneChecked },
    );
    if (this.question.answer) this.multiForm.disable();
  }

  generateControls(options: string[]): object {
    return options.reduce((acc, option) => {
      (acc as any)[option] = this.question.answer?.includes(option);
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
