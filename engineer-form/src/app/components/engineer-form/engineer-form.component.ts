import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

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
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/g,
        ),
      ]),
      hobbies: new FormControl<IHobby[]>([], Validators.required),
    });
  }

  onHobbyAdd() {
    let hobbyDialogRef = this.dialog.open(HobbyDialogComponent, {
      height: 'auto',
      width: 'auto',
    });
  }

  onChange() {
    //console.log(this.engineerForm);
    console.log(this.engineerForm.controls['email']);
  }
}
