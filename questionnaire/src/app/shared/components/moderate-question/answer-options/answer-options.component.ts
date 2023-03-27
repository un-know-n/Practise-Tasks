import { Component } from '@angular/core';
import {
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { OPTIONS_CONTROL_NAME } from '../moderate-question.component';

@Component({
  selector: 'app-answer-options',
  templateUrl: './answer-options.component.html',
  styleUrls: ['./answer-options.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AnswerOptionsComponent,
      multi: true,
    },
  ],
})
export class AnswerOptionsComponent implements ControlValueAccessor {
  optionsForm!: FormGroup;

  private onTouched!: () => object;
  private onChanged!: <T>(arg: T) => object;

  constructor(private fb: FormBuilder) {}

  get options(): FormArray<FormControl> {
    return this.optionsForm?.get(OPTIONS_CONTROL_NAME) as FormArray;
  }

  writeValue(data: string[]): void {
    const optionsControls = data.map((option) => {
      return this.fb.control(option, Validators.required);
    });
    this.optionsForm = this.fb.group({
      options: this.fb.array(optionsControls),
    });
  }

  registerOnChange(fn: <T>(arg: T) => object): void {
    this.optionsForm.valueChanges.subscribe((value) => {
      if (this.optionsForm.valid) fn([...value[OPTIONS_CONTROL_NAME]]);
      else fn('');
    });
  }

  registerOnTouched(fn: () => object): void {
    this.onTouched = fn;
  }

  onAddOption(): void {
    this.options.push(this.fb.control('', Validators.required));
  }

  onDeleteOption(index: number): void {
    this.options.removeAt(index);
  }
}
