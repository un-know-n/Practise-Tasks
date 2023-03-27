import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsListComponent } from './questions-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';
import { GenerateQuestionModule } from './components/generate-question/generate-question.module';

const routes: Routes = [
  {
    path: '',
    component: QuestionsListComponent,
  },
];

@NgModule({
  declarations: [QuestionsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderComponent,
    GenerateQuestionModule,
  ],

  exports: [RouterModule],
})
export class QuestionsListModule {}
