import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { distinctUntilChanged, Subscription } from 'rxjs';
import { composeFormObject } from 'src/app/utils/composeFormObject';

import { EngineerFormService } from './engineer-form.service';
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
export class EngineerFormComponent implements OnInit, OnDestroy {
  engineerForm: FormGroup;
  technologySubscription$!: Subscription;
  availableTechnologies = ['angular', 'vue', 'react'];

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    public formService: EngineerFormService,
  ) {
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
      ],
      hobbies: this.fb.array([], Validators.required),
    });
  }

  ngOnInit(): void {
    this.technologySubscription$ = this.engineerForm.controls[
      'framework'
    ].valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((value) => {
        this.formService.getTechnologyVersion(value);
      });
  }

  ngOnDestroy(): void {
    this.technologySubscription$.unsubscribe();
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
        (<FormArray>this.hobbies).push(
          this.fb.group({
            name: [result.name, Validators.required],
            duration: [result.duration, Validators.required],
          }),
        );
      }
    });
  }

  onDeleteHobby(index: number): void {
    (<FormArray>this.hobbies).removeAt(index);
  }

  getFieldError(controlName: string, error = 'required') {
    return this.engineerForm.controls[controlName].hasError(error);
  }

  get hobbies(): AbstractControl<IHobby[]> {
    return <FormControl>this.engineerForm.get('hobbies');
  }
}
