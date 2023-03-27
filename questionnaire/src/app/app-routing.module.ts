import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./question-management/question-management.module').then(
        (m) => m.QuestionManagementModule,
      ),
    pathMatch: 'full',
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./create-question/create-question.module').then(
        (m) => m.CreateQuestionModule,
      ),
  },
  {
    path: 'edit/:id',
    loadChildren: () =>
      import('./edit-question/edit-question.module').then(
        (m) => m.EditQuestionModule,
      ),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./questions-list/questions-list.module').then(
        (m) => m.QuestionsListModule,
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
