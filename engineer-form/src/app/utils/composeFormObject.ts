import { FormGroup } from '@angular/forms';

export const composeFormObject = (form: FormGroup) => {
  const result = {};
  for (const property in form.controls) {
    (result as any)[property] = form.controls[property].value;
  }
  return result;
};
