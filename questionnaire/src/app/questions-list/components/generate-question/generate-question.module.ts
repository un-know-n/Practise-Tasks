import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateQuestionComponent } from './generate-question.component';
import { SingleComponent } from './single/single.component';
import { MultipleComponent } from './multiple/multiple.component';
import { OpenComponent } from './open/open.component';
import { MatCardModule } from '@angular/material/card';
import { QuestionLayoutComponent } from './question-layout/question-layout.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    GenerateQuestionComponent,
    QuestionLayoutComponent,
    SingleComponent,
    OpenComponent,
    MultipleComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRippleModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatCheckboxModule,
  ],
  exports: [GenerateQuestionComponent],
})
export class GenerateQuestionModule {}
