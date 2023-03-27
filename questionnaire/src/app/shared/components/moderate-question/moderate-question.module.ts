import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModerateQuestionComponent } from './moderate-question.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { AnswerOptionsComponent } from './answer-options/answer-options.component';

@NgModule({
  declarations: [ModerateQuestionComponent, AnswerOptionsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRippleModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatRadioModule,
  ],
  exports: [ModerateQuestionComponent],
})
export class ModerateQuestionModule {}
