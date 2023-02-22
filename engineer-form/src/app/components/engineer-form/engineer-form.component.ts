import { Component, OnDestroy } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, delay, map, Observable, of, take } from 'rxjs';
import { composeFormObject } from 'src/app/utils/composeFormObject';

import { HobbyDialogComponent } from './hobby-dialog/hobby-dialog.component';

export interface IHobby {
  name: string;
  duration: string;
}

@Component({
  selector: 'app-engineer-form',
  templateUrl: './engineer-form.component.html',
  styleUrls: ['./engineer-form.component.css'],
})
export class EngineerFormComponent implements OnDestroy {
  engineerForm: FormGroup;
  technologyVersions$ = new BehaviorSubject<string[]>([]);
  serverData = {
    angular: ['1.1.1', '1.2.1', '1.3.3'],
    react: ['2.1.2', '3.2.4', '4.3.1'],
    vue: ['3.3.1', '5.2.1', '5.1.3'],
  };

  constructor(public dialog: MatDialog, private fb: FormBuilder) {
    this.engineerForm = this.fb.group({
      firstName: ['Some', Validators.required],
      lastName: ['Name', Validators.required],
      dateOfBirth: [new Date(), Validators.required],
      framework: ['', Validators.required],
      frameworkVersion: ['', Validators.required],
      email: [
        'test@test.te',
        [
          Validators.required,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),
        ],
        this.asyncEmailValidator,
      ],
      hobbies: this.fb.array([], Validators.required),
    });
  }

  ngOnDestroy(): void {
    this.technologyVersions$.unsubscribe();
  }

  onSubmit(formDirective: FormGroupDirective): void {
    if (this.engineerForm.valid) {
      console.log(composeFormObject(this.engineerForm));
      (<FormArray>this.hobbies).clear();
      this.engineerForm.reset();
      formDirective.resetForm();
    } else {
      console.log('Entered data is incorrect, review it again');
    }
  }

  onHobbyAdd(): void {
    const hobbyDialogRef = this.dialog.open(HobbyDialogComponent, {
      height: 'auto',
      width: 'auto',
    });

    hobbyDialogRef.afterClosed().subscribe((result: IHobby | undefined) => {
      if (result) {
        (<FormArray>this.engineerForm.get('hobbies')).push(
          this.fb.group({
            name: [result.name, Validators.required],
            duration: [result.duration, Validators.required],
          }),
        );
      }
    });
  }

  onDeleteHobby(index: number): void {
    (<FormArray>this.engineerForm.get('hobbies')).removeAt(index);
  }

  asyncEmailValidator(
    control: FormControl,
  ): Observable<ValidationErrors | null> {
    return of(control.value).pipe(
      delay(300),
      map((value) => (value === 'test@test.test' ? { invalid: true } : null)),
    );
  }

  setTechnologyVersion(framework: string): void {
    of(this.serverData)
      .pipe(
        take(1),
        map((data) => data[framework as keyof typeof this.serverData]),
      )
      .subscribe((value) => this.technologyVersions$.next(value));
  }

  get framework(): AbstractControl<string> {
    return <FormControl>this.engineerForm.get('framework');
  }

  get email(): AbstractControl<string> {
    return <FormControl>this.engineerForm.get('email');
  }

  get hobbies(): AbstractControl<IHobby[]> {
    return <FormControl>this.engineerForm.get('hobbies');
  }
}
