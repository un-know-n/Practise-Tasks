import { FormGroup } from '@angular/forms';

export const composeFormObject = (form: FormGroup) => {
  const result = {};
  for (const property in form.controls) {
    let value = form.controls[property].value;
    if (value instanceof Date) {
      value = `${value.getDate()}-${
        value.getMonth() + 1
      }-${value.getFullYear()}`;
    }
    (result as any)[property] = value;
  }
  return result;
};
