import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionManagementComponent } from './question-management.component';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsListComponent } from '../questions-list/questions-list.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionManagementComponent
  }
]

@NgModule({
  declarations: [
    QuestionManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class QuestionManagementModule { }
