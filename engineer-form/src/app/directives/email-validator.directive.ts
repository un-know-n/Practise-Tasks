import { Directive } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
    },
  ],
})
export class EmailValidatorDirective implements AsyncValidator {
  validate(
    control: AbstractControl<string>,
  ): Observable<ValidationErrors | null> {
    return of(control.value).pipe(
      delay(300),
      map((value) => (value === 'test@test.test' ? { invalid: true } : null)),
    );
  }
}
