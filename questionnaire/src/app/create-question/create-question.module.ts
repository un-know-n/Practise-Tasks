import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuestionComponent } from './create-question.component';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from '../shared/components/header/header.component';
import { ModerateQuestionModule } from '../shared/components/moderate-question/moderate-question.module';

const routes: Routes = [
  {
    path: '',
    component: CreateQuestionComponent,
  },
];

@NgModule({
  declarations: [CreateQuestionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderComponent,
    ModerateQuestionModule,
  ],
  exports: [RouterModule],
})
export class CreateQuestionModule {}
