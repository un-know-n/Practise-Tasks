import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModerateQuestionComponent } from './moderate-question.component';
import { RouterModule, Routes } from '@angular/router';
import { QuestionManagementComponent } from '../question-management/question-management.component';

const routes: Routes = [
  {
    path: '',
    component: ModerateQuestionComponent
  }
]

@NgModule({
  declarations: [
    ModerateQuestionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ModerateQuestionModule { }
