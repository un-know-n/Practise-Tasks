import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditQuestionComponent } from './edit-question.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';
import { ModerateQuestionModule } from '../shared/components/moderate-question/moderate-question.module';

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

    HeaderComponent,
    ModerateQuestionModule,
  ],
  exports: [RouterModule],
})
export class EditQuestionModule {}
