import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./question-management/question-management.module').then(m => m.QuestionManagementModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./moderate-question/moderate-question.module').then(m => m.ModerateQuestionModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./moderate-question/moderate-question.module').then(m => m.ModerateQuestionModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./questions-list/questions-list.module').then(m => m.QuestionsListModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
