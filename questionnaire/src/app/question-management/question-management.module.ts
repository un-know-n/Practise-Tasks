import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionManagementComponent } from './question-management.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: QuestionManagementComponent,
  },
];

@NgModule({
  declarations: [QuestionManagementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderComponent,
    MatButtonModule,
  ],
  exports: [RouterModule],
})
export class QuestionManagementModule {}
