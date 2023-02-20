import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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
export class EngineerFormComponent implements OnInit {
  engineerForm!: FormGroup;
  technologiesVersions = {
    angular: ['1.1.1', '1.2.1', '1.3.3'],
    react: ['2.1.2', '3.2.4', '4.3.1'],
    vue: ['3.3.1', '5.2.1', '5.1.3'],
  };

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.engineerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      framework: new FormControl('', Validators.required),
      frameworkVersion: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g,
        ),
      ]),
      hobbies: new FormControl<IHobby[]>([], Validators.required),
    });
    this.listenToEmailChange();
  }

  onHobbyAdd() {
    const hobbyDialogRef = this.dialog.open(HobbyDialogComponent, {
      height: 'auto',
      width: 'auto',
    });

    hobbyDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.engineerForm.controls['hobbies'].setValue([
          ...this.engineerForm.controls['hobbies'].value,
          result,
        ]);
      }
    });
  }

  onSubmit() {
    if (!this.engineerForm.valid) {
      console.log('There are errors still');
      return;
    }

    console.log(composeFormObject(this.engineerForm));
  }

  onDeleteHobby(index: number) {
    const filteredHobbies = (
      this.engineerForm.controls['hobbies'].value as IHobby[]
    ).filter((_, i) => i !== index);
    this.engineerForm.controls['hobbies'].setValue(filteredHobbies);
  }

  listenToEmailChange() {
    this.engineerForm.controls['email'].valueChanges.subscribe(
      (value) =>
        value === 'test@test.test' &&
        this.engineerForm.controls['email'].setErrors({ invalid: true }),
    );
  }

  takeTechnologyVersions(string: any) {
    return this.technologiesVersions[
      string as keyof typeof this.technologiesVersions
    ];
  }
}
