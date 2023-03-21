import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditQuestionComponent } from './edit-question.component';
import { RouterModule, Routes } from '@angular/router';
import { ModerateQuestionComponent } from '../shared/components/moderate-question/moderate-question.component';
import { HeaderComponent } from '../shared/components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: EditQuestionComponent,
  },
];

@NgModule({
  declarations: [EditQuestionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ModerateQuestionComponent,
    HeaderComponent,
  ],
  exports: [RouterModule],
})
export class EditQuestionModule {}
